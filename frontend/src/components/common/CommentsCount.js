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
    <>
      {process.env.GATSBY_DISQUS_SHORTNAME && (
        <StyledCommentsCount>
          <FaCommentDots />
          <StyledCommentCount config={config} placeholder="loading..." />
        </StyledCommentsCount>
      )}
    </>
  )
}

const StyledCommentsCount = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`

const StyledCommentCount = styled(CommentCount)`
  margin-left: 1rem;
`

export { CommentsCount }
