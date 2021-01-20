import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Portfolios from "../components/Portfolios"

const PortfoliosPage = ({
  data: {
    allStrapiPortfolios: { nodes: portfolios },
  },
}) => {
  return (
    <Layout>
      <section>
        <Portfolios portfolios={portfolios} title="all portfolios" />
      </section>
    </Layout>
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

export default PortfoliosPage
