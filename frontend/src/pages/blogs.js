import React from "react"
import { graphql } from "gatsby"
import useFilter from "../hooks/useFilter"
import { ArticlesPage } from "../components/common"

const BlogsPage = ({ data }) => {
  const {
    allMdx: { nodes: blogs },
  } = data
  // tags取得
  let duplicatedTags = []
  blogs.map(blog => {
    blog.frontmatter.tags.map(tag => duplicatedTags.push(tag))
  })
  const tags = [...new Set(duplicatedTags)]

  const prefix = "blogs"

  const {
    nestedInstances,
    selectedTags,
    handleChange,
    resetInstances,
  } = useFilter(blogs)

  return (
    <ArticlesPage
      nestedInstances={nestedInstances}
      prefix={prefix}
      tags={tags}
      selectedTags={selectedTags}
      handleChange={handleChange}
      resetInstances={resetInstances}
    />
  )
}

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        excerpt
        frontmatter {
          title
          author
          tags
          date(formatString: "MMMM, Do, YYYY")
          slug
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default BlogsPage
