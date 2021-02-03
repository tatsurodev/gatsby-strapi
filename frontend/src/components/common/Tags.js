import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTags, faHashtag } from "@fortawesome/free-solid-svg-icons"

const Tags = ({ tags }) => {
  return (
    <StyledTags>
      <div className="row">
        <div className="wrapper">
          <div className="col-1">
            <FontAwesomeIcon icon={faTags} />
          </div>
          <div className="col-11">
            {tags.map((tag, index) => (
              <Link
                key={index}
                to={`/tags/${tag}`}
                className="btn btn-outline-info btn-sm"
              >
                <FontAwesomeIcon icon={faHashtag} />
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </StyledTags>
  )
}

const StyledTags = styled.div`
  .wrapper {
    display: flex;
    align-items: center;
    /* height: 6rem;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden; */
  }
  a {
    margin: 0.3rem;
  }
`

export { Tags }
