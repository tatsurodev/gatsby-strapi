import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Portfolios from "../components/Portfolios"
import Reviews from "../components/Reviews"

const IndexPage = ({ data }) => {
  const {
    allStrapiPortfolios: { nodes: portfolios },
    allStrapiReviews: { nodes: reviews },
  } = data

  return (
    <Layout>
      <Hero />
      <Portfolios portfolios={portfolios} title="Featured Portfolios" />
      <Reviews
        reviews={reviews}
        title="Featured Reviews of Udemy Courses and Books"
      />
    </Layout>
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
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        slug
        date(formatString: "YYYY, MM")
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
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        slug
        date(formatString: "YYYY, MM")
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
  }
`

export default IndexPage
