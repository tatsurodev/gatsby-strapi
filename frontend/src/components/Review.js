import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { Tags } from "../components/common"

const Review = ({ title, slug, image, tags: ArrayOfTagsObject }) => {
  let tags = []
  ArrayOfTagsObject.map(({ name }) => tags.push(name))

  return (
    <StyledReview className="col-md-6">
      <div className="card">
        <Image fluid={image.childImageSharp.fluid} className="card-img" />
        <div className="card-img-overlay">
          <Link to={`/reviews/${slug}`}>
            <h3 className="card-title text-white">{title}</h3>
          </Link>
        </div>
        <div className="card-footer">
          <Tags tags={tags} />
        </div>
      </div>
    </StyledReview>
  )
}

const StyledReview = styled.div`
  .card-title {
    width: 100%;
    height: 100%;
  }
`

Review.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  websites: PropTypes.arrayOf(PropTypes.object),
}

export default Review
