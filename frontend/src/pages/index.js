import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Portfolios from "../components/Portfolios"
import Reviews from "../components/Reviews"
import Blogs from "../components/Blogs"
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
      <Portfolios portfolios={portfolios} title="Featured Portfolios" />
      <Reviews reviews={reviews} title="Featured Reviews" />
      <Blogs blogs={blogs} title="Recent Blogs" />
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
