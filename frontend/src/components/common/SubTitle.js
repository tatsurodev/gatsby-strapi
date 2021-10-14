import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SubTitle = ({ title, className }) => {
  return (
    <StyledSubTitle className={className}>
      <h2 className="title">{title}</h2>
      <hr />
    </StyledSubTitle>
  )
}

const StyledSubTitle = styled.div`
  .title {
    margin-bottom: 0.5rem;
    font-size: 2rem;
    text-transform: capitalize;
  }

  hr {
    margin-bottom: 0.5rem;
  }
`

SubTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export { SubTitle }
