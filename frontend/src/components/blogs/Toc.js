import React from 'react'
import styled from 'styled-components'
import { TocHeadings } from '.'

const Toc = ({ items }) => {
  return (
    <StyledToc>
      <h2>Table of Contents</h2>
      <TocHeadings items={items} />
    </StyledToc>
  )
}

const StyledToc = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.primaryBg};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 10px;
`

export { Toc }
