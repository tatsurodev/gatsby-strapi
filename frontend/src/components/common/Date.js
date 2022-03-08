import React from 'react'
import styled from 'styled-components'
import { FaCalendarAlt } from 'react-icons/fa'

const Date = ({ date }) => {
  return (
    <StyledDate>
      <FaCalendarAlt />
      <span>{date}</span>
    </StyledDate>
  )
}

const StyledDate = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  > span {
    margin-left: 1rem;
  }
`

export { Date }
