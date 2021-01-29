import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Title = ({ title }) => {
  return (
    <StyledTitle>
      <h2 className="text-capitalize">{title}</h2>
      <hr />
    </StyledTitle>
  )
}

const StyledTitle = styled.div`
  h2 {
    font-size: 3vw;
  }
`

Title.propTypes = {
  title: PropTypes.string.isRequired,
}

export { Title }
