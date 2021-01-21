import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import { Tags, Websites, Rating } from "../components/common"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

const ReviewTemplate = ({ data }) => {
  const {
    id,
    type,
    title,
    author,
    url,
    review,
    rating,
    image,
    date,
    websites,
    tags: ArrayOfTagsObject,
  } = data.review
  let tags = []
  ArrayOfTagsObject.map(({ name }) => tags.push(name))

  return (
    <Layout>
      <article>
        <Image fluid={image.childImageSharp.fluid} />
        <div>
          <div className="d-flex">
            <Rating rating={rating} />
            <h3>{title}</h3>
            <span>{author}</span>
            <a
              className="btn btn-outline-info ml-2"
              href={url}
              target="__blank"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </div>
          <p>{review}</p>
          <Websites websites={websites} />
          <Tags tags={tags} />
          <div>Updated At: {date}</div>
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query GetReview($slug: String) {
    review: strapiReviews(slug: { eq: $slug }) {
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
`

export default ReviewTemplate
