import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import { Tags, Websites } from "../components/common"
import { getNoDuplicateTags } from "../utils"

const PortfolioTemplate = ({ data }) => {
  const { title, description, image, date, websites } = data.portfolio
  const tags = getNoDuplicateTags(websites)

  return (
    <Layout>
      <article>
        <Image fluid={image.childImageSharp.fluid} />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <Websites websites={websites} />
          <Tags tags={tags} />
          <div>Updated At: {date}</div>
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query GetPortfolio($slug: String) {
    portfolio: strapiPortfolios(slug: { eq: $slug }) {
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
`

export default PortfolioTemplate
