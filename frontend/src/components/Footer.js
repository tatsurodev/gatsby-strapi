import React from "react"
import styled from "styled-components"
import { useLocation } from "@reach/router"

const Footer = () => {
  const isHome = useLocation().pathname === "/"

  return (
    <StyledFooter>
      <div className={isHome ? "home" : ""}>
        <div className="container">
          <div className="row">
            <div className="col">
              Copyright {new Date().getFullYear()} &copy; tatsuro.dev
            </div>
          </div>
        </div>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  padding: 1.2rem;
  color: white;
  text-align: center;
  position: relative;
  background: var(--info);

  .home {
    color: var(--gray);
    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 30%;
      right: 0;
      bottom: 0;
      background: white;
    }
  }
`

export default Footer
