import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"

const Date = ({ date }) => {
  return (
    <div className="d-flex align-items-center mt-3">
      <FontAwesomeIcon icon={faCalendarAlt} />
      <span className="ml-3">{date}</span>
    </div>
  )
}

export { Date }
