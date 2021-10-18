import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { TwoColumns } from '../../components/layout'
import { getNoDuplicateTags } from '../../utils'

const PortfolioTemplate = ({ data, pageContext, location }) => {
  const { id, title, description, image, date, websites } = data.portfolio
  const articles = data.recentPortfolios.nodes
  const tags = getNoDuplicateTags(websites)

  return (
    <StyledPortfolio>
      <TwoColumns
        prefix="portfolios"
        relatedArticles={articles}
        pageContext={pageContext}
        title={title}
        date={date}
        tags={tags}
        image={image.localFile}
        description={description}
        websites={websites}
        id={id}
        location={location}
      />
    </StyledPortfolio>
  )
}

const StyledPortfolio = styled.div``

export const query = graphql`
  query GetPortfolio($slug: String) {
    portfolio: strapiPortfolios(slug: { eq: $slug }) {
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
      date(formatString: "YYYY-MM-DD")
      websites {
        title
        description
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        github
        url
        tags {
          id
          name
        }
      }
    }

    recentPortfolios: allStrapiPortfolios(
      limit: 3
      sort: { fields: date, order: DESC }
    ) {
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
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`

export default PortfolioTemplate
