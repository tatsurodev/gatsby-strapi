import React from 'react'
import styled, { css } from 'styled-components'
import { useLocation } from '@reach/router'

const Footer = () => {
  const isHome = useLocation().pathname === '/'

  return (
    <StyledFooter isHome={isHome}>
      <div className="container">
        <div className="row">
          <div className="col">
            <span>Copyright {new Date().getFullYear()} &copy; tatsuro.dev</span>
          </div>
        </div>
      </div>
    </StyledFooter>
  )
}

const homeStyle = ({ isHome }) => {
  if (isHome) {
    return css`
      &::before {
        content: '';
        background: ${({ theme }) => theme.secondaryBg};
        position: absolute;
        top: 0;
        left: 0%;
        right: 70%;
        bottom: 0;
      }
    `
  }
}

const StyledFooter = styled.footer`
  position: relative;
  padding: 1.2rem;
  color: ${({ theme }) => theme.text};
  text-align: center;
  // homeだけbg変更
  background: ${({ theme, isHome }) =>
    isHome ? theme.primaryBg : theme.secondaryBg};
  // homeだけborder-topなし
  border-top: ${({ theme, isHome }) =>
    isHome ? 'none' : `1px solid ${theme.borderColor}`};

  ${homeStyle}
`

export { Footer }
