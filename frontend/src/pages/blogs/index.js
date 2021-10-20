import React from 'react'
import { graphql } from 'gatsby'
import useFilter from '../../hooks/useFilter'
import { ArticlesPage } from '../../components/common'

const BlogsPage = ({ data, pageContext }) => {
  const {
    allMdx: { nodes: blogs },
  } = data
  // tags取得
  let duplicatedTags = []
  blogs.map(blog => {
    blog.frontmatter.tags.map(tag => duplicatedTags.push(tag))
  })
  const tags = [...new Set(duplicatedTags)]

  const prefix = 'blogs'

  const { articles, selectedTags, handleChange, resetArticles } =
    useFilter(blogs)

  return (
    <ArticlesPage
      articles={articles}
      prefix={prefix}
      tags={tags}
      selectedTags={selectedTags}
      handleChange={handleChange}
      resetArticles={resetArticles}
      pageContext={pageContext}
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
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default BlogsPage
