import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SubTitle = ({ title, ...props }) => {
  return (
    <StyledSubTitle {...props}>
      <h2>{title}</h2>
      <hr />
    </StyledSubTitle>
  )
}

const StyledSubTitle = styled.div`
  > h2 {
    margin-bottom: 0.5rem;
    font-size: ${({ fontSize }) => fontSize ?? '1.6rem'};
    text-transform: capitalize;
  }

  > hr {
    margin-bottom: 0.5rem;
  }
`

SubTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export { SubTitle }
