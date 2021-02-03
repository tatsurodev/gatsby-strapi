import { useState, useEffect } from "react"
import { getNoDuplicateTags } from "../utils"

const useFilter = defaultInstances => {
  const [selectedTags, setSelectedTags] = useState([])
  // filter後のinstanceを格納
  const [instances, setInstances] = useState(defaultInstances)
  // 表示用のjsxを格納する配列
  const [nestedInstances, setNestedInstances] = useState([])

  const resetInstances = event => {
    setSelectedTags(() => [])
    setInstances(defaultInstances)
  }

  useEffect(() => {
    const filteredInstances = defaultInstances.filter(instance => {
      let hittedTags
      // blog時のtags
      if (instance.frontmatter) {
        hittedTags = instance.frontmatter.tags.filter(tag =>
          selectedTags.includes(tag)
        )
        // review時のtags
      } else if (instance.type) {
        const tags = instance.tags
        hittedTags = tags.filter(ppp => {
          return selectedTags.includes(ppp.name)
        })
      } else {
        // portfolio時のtags
        const tags = getNoDuplicateTags(instance.websites)
        hittedTags = tags.filter(tag => selectedTags.includes(tag))
      }
      return hittedTags.length === selectedTags.length
    })
    setInstances(() => filteredInstances)
  }, [selectedTags])

  // instancesを3つ毎にrowでwrapするために、3つ毎にnestした配列を作成
  useEffect(() => {
    const instanceCopy = [...instances]
    let tempRows = []
    const instanceNumOfOneRow = 3
    while (instanceCopy.length > 0) {
      // spliceは破壊的
      tempRows.push(instanceCopy.splice(0, instanceNumOfOneRow))
    }
    setNestedInstances(() => tempRows)
  }, [instances])

  const handleChange = event => {
    event.persist()
    if (selectedTags.includes(event.target.value)) {
      setSelectedTags(prev =>
        prev.filter(prevTag => prevTag !== event.target.value)
      )
    } else {
      setSelectedTags(prev => {
        return [...prev, event.target.value]
      })
    }
  }

  return {
    instances,
    nestedInstances,
    selectedTags,
    handleChange,
    resetInstances,
  }
}

export default useFilter
