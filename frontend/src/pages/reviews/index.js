import React from 'react'
import { graphql } from 'gatsby'
import { ArticlesPage } from '../../components/common'
import useFilter from '../../hooks/useFilter'

const ReviewsPage = ({
  data: {
    allStrapiReviews: { nodes: reviews },
  },
  pageContext,
}) => {
  // tags取得
  let duplicatedTags = []
  reviews.map(review => {
    review.tags.map(tag => {
      if (tag.slug) {
        duplicatedTags.push(tag.slug)
      }
    })
  })
  const tags = [...new Set(duplicatedTags)]
  const prefix = 'reviews'
  const { articles, selectedTags, handleChange, resetArticles } =
    useFilter(reviews)

  return (
    <ArticlesPage
      articles={articles}
      prefix={prefix}
      tags={tags}
      selectedTags={selectedTags}
      handleChange={handleChange}
      resetArticles={resetArticles}
      pageContext={pageContext}
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
  }
`

export default ReviewsPage
