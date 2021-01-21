import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons"
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons"

const Rating = ({ rating }) => {
  return (
    <div>
      <FontAwesomeIcon icon={rating >= 1 ? fullStar : emptyStar} />
      <FontAwesomeIcon icon={rating >= 2 ? fullStar : emptyStar} />
      <FontAwesomeIcon icon={rating >= 3 ? fullStar : emptyStar} />
      <FontAwesomeIcon icon={rating >= 4 ? fullStar : emptyStar} />
      <FontAwesomeIcon icon={rating >= 5 ? fullStar : emptyStar} />
    </div>
  )
}

export { Rating }
