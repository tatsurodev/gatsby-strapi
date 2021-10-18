import React from 'react'
import styled from 'styled-components'
import { Disqus } from 'gatsby-plugin-disqus'

const Comments = ({ id, title, url, className }) => {
  const config = {
    identifier: id,
    title,
    url,
  }

  return (
    <StyledComments>
      {process.env.GATSBY_DISQUS_SHORTNAME && (
        <Disqus config={config} className={className} />
      )}
    </StyledComments>
  )
}

const StyledComments = styled.div`
   {
    margin: 2rem 0;
    padding: 1rem;
    border-radius: 10px;
    border: 1px solid var(--bs-gray-200);
    background: var(--bs-white);
  }
`

export { Comments }
