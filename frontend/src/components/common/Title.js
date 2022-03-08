import React from 'react'
import { Breadcrumb } from '.'
import styled from 'styled-components'

const Title = ({ title, pageContext }) => {
  return (
    <StyledTitle>
      <h1>{title}</h1>
      <Breadcrumb pageContext={pageContext} crumbLabel={title} />
    </StyledTitle>
  )
}

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-size: 2.4rem;
    text-transform: capitalize;
    margin-bottom: 0.5rem;
  }
`
export { Title }
