import React from "react"
import { graphql } from "gatsby"
import { ArticlesPage } from "../components/common"
import useFilter from "../hooks/useFilter"

const ReviewsPage = ({
  data: {
    allStrapiReviews: { nodes: reviews },
  },
}) => {
  // tags取得
  let duplicatedTags = []
  reviews.map(review => {
    review.tags.map(tag => {
      if (tag.name) {
        duplicatedTags.push(tag.name)
      }
    })
  })
  const tags = [...new Set(duplicatedTags)]
  const prefix = "reviews"
  const {
    nestedInstances,
    selectedTags,
    handleChange,
    resetInstances,
  } = useFilter(reviews)

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
  }
`

export default ReviewsPage
