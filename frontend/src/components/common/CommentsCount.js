import React from 'react'
import styled from 'styled-components'
import { CommentCount } from 'gatsby-plugin-disqus'
import { FaCommentDots } from 'react-icons/fa'

const CommentsCount = ({ id, title, url }) => {
  const config = {
    identifier: id,
    title,
    url,
  }
  return (
    <StyledCommentsCount>
      {process.env.GATSBY_DISQUS_SHORTNAME && (
        <>
          <FaCommentDots />
          <span className="text">
            <CommentCount config={config} placeholder="loading..." />
          </span>
        </>
      )}
    </StyledCommentsCount>
  )
}

const StyledCommentsCount = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  .text {
    margin-left: 1rem;
  }
`

export { CommentsCount }
