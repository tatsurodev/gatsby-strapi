import React from 'react'
import styled from 'styled-components'
import { FaCheckSquare } from 'react-icons/fa'

const List = ({ children }) => {
  return (
    <StyledLi>
      <IconWrapper>
        <FaCheckSquare />
      </IconWrapper>
      <div>{children}</div>
    </StyledLi>
  )
}

const StyledLi = styled.li`
  display: flex;
  font-size: 1rem;
  margin: 0.5rem;
`
const IconWrapper = styled.div`
  > svg {
    vertical-align: middle;
    margin-right: 0.5rem;
  }
`

export { List }
