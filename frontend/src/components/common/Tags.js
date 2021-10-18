import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FaTags, FaHashtag } from 'react-icons/fa'

const Tags = ({ tags }) => {
  return (
    <StyledTags>
      <div>
        <FaTags />
      </div>
      <div className="tags">
        {tags.map((tag, index) => (
          <Link
            key={index}
            to={`/tags/${tag.toLowerCase()}`}
            className="btn btn-outline-dark btn-sm tag"
          >
            <FaHashtag className="hash" />
            <span>{tag}</span>
          </Link>
        ))}
      </div>
    </StyledTags>
  )
}

const StyledTags = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;

  .tags {
    margin-left: 0.5rem;
    flex-wrap: wrap;
    > .tag {
      margin: 0.25rem;
    }
  }

  .hash {
    margin-right: 0.1rem;
  }

  svg {
    vertical-align: middle;
  }
`

export { Tags }
