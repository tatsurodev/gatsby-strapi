import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Reviews from "../components/Reviews"

const ReviewsPage = ({
  data: {
    allStrapiReviews: { nodes: reviews },
  },
}) => {
  return (
    <Layout>
      <section>
        <Reviews reviews={reviews} title="all reviews" page />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiReviews(sort: { fields: date, order: DESC }) {
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

export default ReviewsPage
