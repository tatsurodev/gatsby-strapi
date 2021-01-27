import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { Tags } from "./common"

const Blog = ({ id, excerpt, frontmatter: { title, slug, image, tags } }) => {
  return (
    <StyledBlog className="col-md-6">
      <div className="card">
        <Image fluid={image.childImageSharp.fluid} className="card-img" />
        <div className="card-img-overlay">
          <Link to={`/blogs/${slug}`}>
            <h3 className="card-title text-white">{title}</h3>
          </Link>
        </div>
        <div className="card-footer">
          <Tags tags={tags} />
        </div>
      </div>
    </StyledBlog>
  )
}

const StyledBlog = styled.div`
  .card-title {
    width: 100%;
    height: 100%;
  }
`

Blog.propTypes = {
  frontmatter: PropTypes.object.isRequired,
}

export default Blog
