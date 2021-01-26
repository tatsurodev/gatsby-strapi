import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const TocHeadings = ({ items }) => {
  return (
    <>
      {items.map(item => (
        <li key={item.url}>
          <a
            href={item.url}
            key={item.url}
            onClick={() => scrollTo(`[href='${item.url}']`)}
          >
            {item.title}
          </a>
          <ul>{item.items && <TocHeadings items={item.items} />}</ul>
        </li>
      ))}
    </>
  )
}

export { TocHeadings }
