import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Title = ({ title, className }) => {
  return (
    <StyledTitle className={className}>
      <h2>{title}</h2>
      <hr />
    </StyledTitle>
  )
}

const StyledTitle = styled.div`
  h2 {
    font-size: 3vw;
    text-transform: capitalize;
  }
`

Title.propTypes = {
  title: PropTypes.string.isRequired,
}

export { Title }
