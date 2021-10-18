import React from 'react'
import { graphql } from 'gatsby'
import { ArticlesPage } from '../../components/common'
import useFilter from '../../hooks/useFilter'

const PortfoliosPage = ({
  data: {
    allStrapiPortfolios: { nodes: portfolios },
  },
  pageContext,
}) => {
  let duplicatedTags = []
  portfolios.map(portfolio => {
    portfolio.websites.map(website =>
      website.tags.map(tag => {
        // tag.nameがnullでなければ
        if (tag.name) {
          duplicatedTags.push(tag.name.replace('_', '-'))
        }
      })
    )
  })
  const tags = [...new Set(duplicatedTags)]
  const prefix = 'portfolios'
  const { articles, selectedTags, handleChange, resetArticles } =
    useFilter(portfolios)

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
    allStrapiPortfolios {
      nodes {
        id
        title
        description
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        slug
        date(formatString: "MMMM, YYYY")
        websites {
          title
          github
          url
          tags {
            id
            name
          }
        }
      }
    }
  }
`

export default PortfoliosPage
