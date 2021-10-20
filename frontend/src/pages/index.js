import React from 'react'
import { graphql } from 'gatsby'
import { Hero, FeaturedArticles } from '../components/home'

const IndexPage = ({ data }) => {
  const {
    allStrapiPortfolios: { nodes: portfolios },
    allStrapiReviews: { nodes: reviews },
    allMdx: { nodes: blogs },
  } = data

  return (
    <>
      <Hero />
      <FeaturedArticles articles={portfolios} className="primary" />
      <FeaturedArticles articles={reviews} className="white" />
      <FeaturedArticles articles={blogs} className="primary" />
    </>
  )
}

export const query = graphql`
  {
    allStrapiPortfolios(filter: { featured: { eq: true } }, limit: 4) {
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
    allStrapiReviews(
      filter: { featured: { eq: true } }
      limit: 4
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        id
        type
        title
        author
        url
        review
        rating
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
          id
          title
          description
          github
          url
        }
        tags {
          id
          name
          slug
        }
      }
    }
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 6) {
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

export default IndexPage
