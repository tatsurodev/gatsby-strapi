import React from "react"
import { Link } from "gatsby"
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
  return (
    <header>
      <Navbar variant="dark" bg="info" expand="lg" collapseOnSelect>
        <Container>
          <Link to="/">
            <Navbar.Brand>tatsuro.dev</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
    </header>
  )
}

export default Header
