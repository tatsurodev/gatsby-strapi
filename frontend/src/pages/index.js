import React from "react"
import Header from "../components/Header"
import { Hero, FeaturedArticles } from "../components/home"
import Footer from "../components/Footer"

const IndexPage = ({ data }) => {
  const {
    allStrapiPortfolios: { nodes: portfolios },
    allStrapiReviews: { nodes: reviews },
    allMdx: { nodes: blogs },
  } = data

  return (
    <>
      <Header />
      <Hero />
      <FeaturedArticles articles={portfolios} className="info" />
      <FeaturedArticles articles={reviews} className="white" />
      <FeaturedArticles articles={blogs} className="info" />
      <Footer />
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

export default IndexPage
