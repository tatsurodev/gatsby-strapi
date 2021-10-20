import React from 'react'
import styled from 'styled-components'
import { TocHeadings } from '.'

const Toc = ({ items, className }) => {
  return (
    <>
      {items && (
        <StyledToc className={className}>
          <h2>Table of Contents</h2>
          <TocHeadings items={items} />
        </StyledToc>
      )}
    </>
  )
}

const StyledToc = styled.div`
  padding: 1rem;
  background: var(--bs-white);
  border: 1px solid var(--bs-gray-200);
  border-radius: 10px;
`

export { Toc }
