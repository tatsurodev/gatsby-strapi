import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Portfolios from "../components/Portfolios"

const IndexPage = ({ data }) => {
  const {
    allStrapiPortfolios: { nodes: portfolios },
  } = data

  return (
    <Layout>
      <Hero />
      <Portfolios portfolios={portfolios} title="Featured Portfolios" />
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
  }
`

export default IndexPage
