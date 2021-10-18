import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { TwoColumns } from '../../components/layout'

const ReviewTemplate = ({ data, pageContext, location }) => {
  const {
    id,
    type,
    title,
    author,
    url,
    reviewTitle,
    review,
    rating,
    image,
    date,
    websites,
    tags: ArrayOfTagsObject,
  } = data.review
  let tags = []
  ArrayOfTagsObject.map(({ name }) => tags.push(name))

  const articles = data.recentReviews.nodes

  return (
    <StyledReview>
      <TwoColumns
        prefix="reviews"
        relatedArticles={articles}
        pageContext={pageContext}
        title={title}
        date={date}
        tags={tags}
        image={image.localFile}
        url={url}
        reviewTitle={reviewTitle}
        rating={rating}
        description={review}
        websites={websites}
        id={id}
        location={location}
      />
    </StyledReview>
  )
}

const StyledReview = styled.div``

export const query = graphql`
  query GetReview($slug: String) {
    review: strapiReviews(slug: { eq: $slug }) {
      id
      type
      title
      author
      url
      reviewTitle
      review
      rating
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      date(formatString: "YYYY-MM")
      websites {
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
        github
        url
      }
      tags {
        id
        name
        slug
      }
    }

    recentReviews: allStrapiReviews(
      limit: 3
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        id
        title
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        slug
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`

export default ReviewTemplate
