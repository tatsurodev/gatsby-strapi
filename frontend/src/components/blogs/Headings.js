import React from 'react'
import styled from 'styled-components'

// propsを渡さないとgatsby-remark-autolink-headersが動かないので注意
const H1 = ({ children, ...props }) => {
  return <StyledH1 {...props}>{children}</StyledH1>
}

const StyledH1 = styled.h1`
  font-size: ${({ fontSize }) => fontSize ?? '1.6rem'};
  margin: 2rem 0 0.5rem 0;
  padding: 0.5rem;
  color: ${({ theme }) => theme.headings};
  background: ${({ theme }) => theme.primary};
  border-radius: 10px;
  ${({ center }) => (center ? 'text-align: center;' : '')}
`

const H2 = ({ children, ...props }) => {
  return <StyledH2 {...props}>{children}</StyledH2>
}

const StyledH2 = styled.h2`
  padding: 0.5rem;
  border-bottom: solid 3px ${({ theme }) => theme.borderColor};
`

const H3 = ({ children, ...props }) => {
  return <StyledH3 {...props}>{children}</StyledH3>
}

const StyledH3 = styled.h3`
  padding: 0.5rem;
  border-bottom: dotted 1px ${({ theme }) => theme.borderColor};
`

export { H1, H2, H3 }
