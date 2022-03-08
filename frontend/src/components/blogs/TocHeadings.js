import React from 'react'
import styled from 'styled-components'
import scrollTo from 'gatsby-plugin-smoothscroll'

const TocHeadings = ({ items, parentIndex }) => {
  return (
    <StyledTocHeadings>
      {items.map((item, index) => {
        const currentIndex = parentIndex
          ? `${parentIndex}.${index + 1}`
          : `${index + 1}`
        return (
          <StyledLi key={item.url}>
            <a
              href={item.url}
              key={item.url}
              onClick={() => scrollTo(`[href='${item.url}']`)}
            >
              <span>{parentIndex ? `${currentIndex}` : index + 1}</span>
              <StyledSpan>{item.title}</StyledSpan>
            </a>
            {item.items && (
              <TocHeadings items={item.items} parentIndex={currentIndex} />
            )}
          </StyledLi>
        )
      })}
    </StyledTocHeadings>
  )
}

const StyledTocHeadings = styled.ul``

const StyledLi = styled.li`
  font-size: 1rem;
  margin: 0.4rem 0 0 0.4rem;
  list-style: none;

  > a {
    display: block;
    color: ${({ theme }) => theme.links};

    &:hover {
      opacity: 0.8;
    }
  }
`

const StyledSpan = styled.span`
  margin-left: 0.4rem;
`

export { TocHeadings }
