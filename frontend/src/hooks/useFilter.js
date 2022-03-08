import { useState, useEffect } from 'react'
import { getNoDuplicateTags } from '../utils'

const useFilter = defaultArticles => {
  const [selectedTags, setSelectedTags] = useState([])
  // filter後のarticleを格納
  const [articles, setArticles] = useState(defaultArticles)

  const resetArticles = event => {
    setSelectedTags(() => [])
    setArticles(defaultArticles)
  }

  useEffect(() => {
    const filteredArticles = defaultArticles.filter(article => {
      let hittedTags
      // blog時のtags
      if (article.frontmatter) {
        hittedTags = article.frontmatter.tags.filter(tag =>
          selectedTags.includes(tag)
        )
        // review時のtags
      } else if (article.type) {
        const tags = article.tags
        hittedTags = tags.filter(tag => {
          return selectedTags.includes(tag.slug)
        })
      } else {
        // portfolio時のtags
        const tags = getNoDuplicateTags(article.websites)
        hittedTags = tags.filter(tag => selectedTags.includes(tag))
      }
      return hittedTags.length === selectedTags.length
    })
    setArticles(() => filteredArticles)
  }, [selectedTags, defaultArticles])

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
    articles,
    selectedTags,
    handleChange,
    resetArticles,
  }
}

export default useFilter
