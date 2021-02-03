import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faIdCardAlt,
  faBriefcase,
  faGraduationCap,
  faEnvelope,
  faBlog,
} from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  // navbarのtogglerによってnavbarのcolor変更
  const [isNavItemDark, setIsNavItemDark] = useState(false)
  // homeとそれ以外の時でbackground-colorを変更
  const isHome = useLocation().pathname === "/"

  return (
    <StyledHeader>
      <Navbar
        bg={isHome ? "transparent" : "info"}
        expand="md"
        collapseOnSelect
        variant={isNavItemDark ? "light" : "dark"}
      >
        <Container>
          <Link to="/">
            <Navbar.Brand
              className={`text-capitalize${isHome ? " text-muted" : ""}`}
            >
              &lt;Tatsuro.Dev /&gt;
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => {
              isHome && setIsNavItemDark(!isNavItemDark)
            }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item as="li">
                <Link to="/" className="nav-link">
                  <FontAwesomeIcon icon={faHome} /> Home
                </Link>
              </Nav.Item>
              <Link to="/about" className="nav-link">
                <FontAwesomeIcon icon={faIdCardAlt} /> About
              </Link>
              <NavDropdown title="My Work">
                <Link to="/portfolios">
                  <NavDropdown.Item as="li">
                    <FontAwesomeIcon icon={faBriefcase} /> Portfolio
                  </NavDropdown.Item>
                </Link>
                <Link to="/reviews">
                  <NavDropdown.Item as="li">
                    <FontAwesomeIcon icon={faGraduationCap} /> Udemy & Book
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
              <Link to="/contacts" className="nav-link">
                <FontAwesomeIcon icon={faEnvelope} /> Contact
              </Link>
              <Link to="/blogs" className="nav-link">
                <FontAwesomeIcon icon={faBlog} /> Blog
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: relative;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 30%;
    right: 0;
    bottom: 0;
    background: var(--info);
  }

  .navbar-brand {
    font-size: 1.2rem;
  }
`

export default Header
