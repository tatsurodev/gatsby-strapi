import React from 'react'
import styled from 'styled-components'
import { BsFillExclamationDiamondFill } from 'react-icons/bs'

const NoData = () => {
  return (
    <StyledNoData>
      <BsFillExclamationDiamondFill className="exclamation" />
      <span className="message">No Data Found</span>
      <BsFillExclamationDiamondFill className="exclamation" />
    </StyledNoData>
  )
}

const StyledNoData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  color: var(--bs-dark);

  .exclamation {
    color: var(--bs-danger);
    font-size: 2rem;
  }

  .message {
    margin: 0 0.5rem;
  }
`

export { NoData }
