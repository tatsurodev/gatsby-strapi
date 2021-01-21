import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Websites = ({ websites }) => {
  return (
    <div className="d-flex">
      {websites.map(({ title, url, github }, index) => (
        <div key={index} className="mr-2">
          <span>
            {title}:
            {url && (
              <a className="btn btn-outline-info ml-2" href={url}>
                <FontAwesomeIcon icon={faGlobeAmericas} />
              </a>
            )}
            {github && (
              <a className="btn  btn-outline-info ml-2" href={github}>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            )}
          </span>
        </div>
      ))}
    </div>
  )
}

export { Websites }
