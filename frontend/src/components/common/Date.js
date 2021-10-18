import React from 'react'
import styled from 'styled-components'
import { FaCalendarAlt } from 'react-icons/fa'

const Date = ({ date, className }) => {
  return (
    <StyledDate className={className}>
      <FaCalendarAlt />
      <span className="text">{date}</span>
    </StyledDate>
  )
}

const StyledDate = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  .text {
    margin-left: 1rem;
  }
`

export { Date }
