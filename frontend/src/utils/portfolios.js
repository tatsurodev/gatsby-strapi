const getNoDuplicateTags = websites => {
  const tagsArray = websites.map(website =>
    website.tags.map(tag => tag.name.replace('_', '-'))
  )
  // console.log("tagsArray", tagsArray)
  // 重複を排除したset objectを作成
  let tagsSet = new Set()
  tagsArray.map(tagArray =>
    tagArray.map(tag => {
      // nullでなければ追加
      if (tag) {
        tagsSet.add(tag)
      }
    })
  )
  // console.log("tagsArray", tagsArray)
  // setからarrayへ変換
  const tags = Array.from(tagsSet)
  // spread operatorで変換してもおｋ
  // const tags = [...tagSet]
  // console.log("tags", tags)
  return tags
}

export { getNoDuplicateTags }
