import React from 'react'
import styled from 'styled-components'

const Code = ({ children }) => {
  return <StyledCode>{children}</StyledCode>
}

const StyledCode = styled.code`
  background-color: ${({ theme }) => theme.secondaryBg};
  border-radius: 5px;
  color: #f14668;
  font-size: 0.9rem;
  padding: 0.25rem 0.5rem;
`

export { Code }
