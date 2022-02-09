import React from 'react'
import styled from 'styled-components'
import { HiCheckCircle } from 'react-icons/hi'

const List = ({ children }) => {
  return (
    <StyledList>
      <HiCheckCircle /> {children}
    </StyledList>
  )
}

const StyledList = styled.li`
  font-size: 1rem;
  margin: 0.5rem;

  svg {
    font-size: 1.2rem;
    vertical-align: middle;
  }
`

export { List }
