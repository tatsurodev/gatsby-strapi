import React from "react"
import { graphql } from "gatsby"
import { ArticlesPage } from "../components/common"
import useFilter from "../hooks/useFilter"

const PortfoliosPage = ({
  data: {
    allStrapiPortfolios: { nodes: portfolios },
  },
}) => {
  let duplicatedTags = []
  portfolios.map(portfolio => {
    portfolio.websites.map(website =>
      website.tags.map(tag => {
        // tag.nameがnullでなければ
        if (tag.name) {
          duplicatedTags.push(tag.name)
        }
      })
    )
  })
  const tags = [...new Set(duplicatedTags)]
  const prefix = "portfolios"
  const {
    nestedInstances,
    selectedTags,
    handleChange,
    resetInstances,
  } = useFilter(portfolios)

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
    allStrapiPortfolios {
      nodes {
        id
        title
        description
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
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
