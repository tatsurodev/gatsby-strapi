import React from 'react'
import styled from 'styled-components'
import scrollTo from 'gatsby-plugin-smoothscroll'

const TocHeadings = ({ items, parentIndex }) => {
  return (
    <StyledTocHeadings>
      <ul>
        {items.map((item, index) => {
          const currentIndex = parentIndex
            ? `${parentIndex}.${index + 1}`
            : `${index + 1}`
          return (
            <li key={item.url}>
              <a
                href={item.url}
                key={item.url}
                onClick={() => scrollTo(`[href='${item.url}']`)}
              >
                <span className="prefix">
                  {parentIndex ? `${currentIndex}` : index + 1}
                </span>
                <span className="title">{item.title}</span>
              </a>
              {item.items && (
                <TocHeadings items={item.items} parentIndex={currentIndex} />
              )}
            </li>
          )
        })}
      </ul>
    </StyledTocHeadings>
  )
}

const StyledTocHeadings = styled.div`
  ul,
  li {
    font-size: 1rem;
    margin: 0.4rem 0 0 0.4rem;
    list-style: none;
  }
  a {
    display: block;
    color: var(--gray);
  }
  a:hover {
    opacity: 0.8;
  }
  .prefix {
  }
  .title {
    margin-left: 0.4rem;
  }
`

export { TocHeadings }
