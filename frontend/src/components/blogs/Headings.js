import React from 'react'
import styled from 'styled-components'

const H1 = ({ children }) => {
  return <StyledH1>{children}</StyledH1>
}

const StyledH1 = styled.h1`
  font-size: 1.6rem;
  margin: 1rem 0;
  padding: 0.5rem;
  color: var(--bs-white);
  background: var(--bs-primary);
  border-radius: 10px;
`

const H2 = ({ children }) => {
  return <StyledH2>{children}</StyledH2>
}

const StyledH2 = styled.h2`
  padding: 0.5rem;
  border-bottom: solid 1px var(--bs-primary);

  svg {
    margin-right: 0.5rem;
  }
`

const H3 = ({ children }) => {
  return <StyledH3>{children}</StyledH3>
}

const StyledH3 = styled.h3`
  padding: 0.5rem;
  border-bottom: dotted 1px var(--bs-primary);
  svg {
    margin-right: 0.5rem;
  }
`

export { H1, H2, H3 }
