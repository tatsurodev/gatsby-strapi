import React from 'react'
import styled from 'styled-components'
import { Title, Message } from '../components/common'
import { RiEmotionUnhappyLine } from 'react-icons/ri'

const NotFound = ({ pageContext, location }) => {
  return (
    <StyledNotFound className="container">
      <Message location={location} />
      <Title title="404" pageContext={pageContext} />
      <StyledH3>
        <RiEmotionUnhappyLine />
        <span>Page Not Found</span>
      </StyledH3>
    </StyledNotFound>
  )
}

const StyledNotFound = styled.div`
  padding: 2rem;
  button {
    border-radius: 5px;
  }
`

const StyledH3 = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    margin-left: 1rem;
  }
`

export default NotFound
