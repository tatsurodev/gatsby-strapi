import React from "react"
import { TocHeadings } from "."

const Toc = ({ items }) => {
  return (
    <>
      {items && (
        <div>
          <h2>Table of contents</h2>
          <TocHeadings items={items} />
        </div>
      )}
    </>
  )
}

export { Toc }
