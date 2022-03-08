import React from 'react'
import styled from 'styled-components'
import { BsFillExclamationDiamondFill } from 'react-icons/bs'

const NoData = () => {
  return (
    <StyledNoData>
      <BsFillExclamationDiamondFill />
      <span>No Data Found</span>
      <BsFillExclamationDiamondFill />
    </StyledNoData>
  )
}

const StyledNoData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  color: ${({ theme }) => theme.text};

  > svg {
    color: ${({ theme }) => theme.danger};
    font-size: 2rem;
  }

  > span {
    margin: 0 0.5rem;
  }
`

export { NoData }
