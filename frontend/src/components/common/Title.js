import React from "react"
import PropTypes from "prop-types"

const Title = ({ title }) => {
  return (
    <div className="pt-2">
      <h2 className="text-uppercase">{title}</h2>
      <hr />
    </div>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
}

export { Title }
