import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import styled from 'styled-components'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import {
  FaHome,
  FaIdCardAlt,
  FaBriefcase,
  FaGraduationCap,
  FaEnvelope,
  FaBlog,
} from 'react-icons/fa'

const Header = () => {
  // navbarのtogglerによってnavbarのcolor変更
  const [isNavItemDark, setIsNavItemDark] = useState(false)
  // homeとそれ以外の時でbackground-colorを変更
  const isHome = useLocation().pathname === '/'

  return (
    <StyledHeader>
      <Navbar
        bg={isHome ? 'transparent' : ''}
        expand="md"
        collapseOnSelect
        variant={isNavItemDark ? 'light' : 'dark'}
      >
        <Container>
          <Link to="/">
            <Navbar.Brand className={`${isHome ? ' text-muted' : ''}`}>
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
            <Nav className="ms-auto">
              <Nav.Item as="li">
                <Link to="/" className="nav-link d-flex align-items-center">
                  <FaHome />
                  <span className="nav-link__text">Home</span>
                </Link>
              </Nav.Item>
              <Link to="/about" className="nav-link d-flex align-items-center">
                <FaIdCardAlt />
                <span className="nav-link__text">About</span>
              </Link>
              <NavDropdown title="My Work">
                <Link to="/portfolios">
                  <NavDropdown.Item
                    as="li"
                    className="d-flex align-items-center"
                  >
                    <FaBriefcase />
                    <span className="nav-link__text">Portfolio</span>
                  </NavDropdown.Item>
                </Link>
                <Link to="/reviews">
                  <NavDropdown.Item
                    as="li"
                    className="d-flex align-items-center"
                  >
                    <FaGraduationCap />
                    <span className="nav-link__text">Udemy & Book</span>
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
              <Link
                to="/contacts"
                className="nav-link d-flex align-items-center"
              >
                <FaEnvelope />
                <span className="nav-link__text">Contact</span>
              </Link>
              <Link to="/blogs" className="nav-link d-flex align-items-center">
                <FaBlog />
                <span className="nav-link__text">Blog</span>
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
    content: '';
    position: absolute;
    top: 0;
    left: 30%;
    right: 0;
    bottom: 0;
    background: var(--bs-primary);
  }

  .navbar {
    background: var(--bs-primary);

    li:hover {
      color: var(--bs-white);
    }

    .navbar-brand {
      font-size: 1.2rem;
    }

    .nav-link {
      color: var(--bs-white);
    }

    .nav-link__text {
      margin-left: 0.25rem;
    }

    .dropdown-item {
      color: var(--bs-gray);
      font-weight: bold;
    }
  }
`

export { Header }
