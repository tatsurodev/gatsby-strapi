import React from 'react'
import styled from 'styled-components'
import { Disqus } from 'gatsby-plugin-disqus'

const Comments = ({ id, title, url }) => {
  const config = {
    identifier: id,
    title,
    url,
  }

  return (
    <>
      {process.env.GATSBY_DISQUS_SHORTNAME && (
        <StyledComments>
          <Disqus config={config} />
        </StyledComments>
      )}
    </>
  )
}

const StyledComments = styled.div`
  color: ${({ theme }) => theme.text};
  margin: 2rem 0;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.primaryBg};
`

export { Comments }
