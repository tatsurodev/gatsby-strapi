import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTags } from "@fortawesome/free-solid-svg-icons"

const Tags = ({ tags }) => {
  return (
    <div className="d-flex align-items-center">
      <FontAwesomeIcon icon={faTags} />
      {tags.map((tag, index) => (
        <Link
          key={index}
          to={`/tags/${tag}`}
          className="btn btn-outline-info btn-sm ml-2"
        >
          {tag}
        </Link>
      ))}
    </div>
  )
}

export { Tags }
