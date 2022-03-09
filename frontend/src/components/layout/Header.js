import React from 'react'
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
import { Toggler } from './Toggler'

const Header = () => {
  // homeとそれ以外の時でbackground-colorを変更
  const isHome = useLocation().pathname === '/'
  // react component内でtheme contextにaccessする場合は、ThemeContextを使用。styled componentのpropsで与えた値は、定義内でpropsでaccessできる
  // const { id, primary, warning, danger } = useContext(ThemeContext)

  return (
    <StyledHeader isHome={isHome}>
      <StyledNavbar
        bg={isHome ? 'transparent' : ''}
        expand="md"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand>
            <StyledLink to="/">&lt;Tatsuro.Dev /&gt;</StyledLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <StyledNav>
              <StyledLink to="/">
                <FaHome />
                <span>Home</span>
              </StyledLink>
              <StyledLink to="/about">
                <FaIdCardAlt />
                <span>About</span>
              </StyledLink>
              <StyledNavDropdown title="My Work">
                <NavDropdown.Item as="li">
                  <StyledLink to="/portfolios">
                    <FaBriefcase />
                    <span>Portfolio</span>
                  </StyledLink>
                </NavDropdown.Item>
                <NavDropdown.Item as="li">
                  <StyledLink to="/reviews">
                    <FaGraduationCap />
                    <span>Udemy & Book</span>
                  </StyledLink>
                </NavDropdown.Item>
              </StyledNavDropdown>
              <StyledLink to="/contacts">
                <FaEnvelope />
                <span>Contact</span>
              </StyledLink>
              <StyledLink to="/blogs">
                <FaBlog />
                <span>Blog</span>
              </StyledLink>
              <StyledTogglerWrapper>
                <Toggler />
              </StyledTogglerWrapper>
            </StyledNav>
          </Navbar.Collapse>
        </Container>
      </StyledNavbar>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: relative;
  border-bottom: ${({ theme, isHome }) =>
    isHome ? 'none' : `1px solid ${theme.borderColor}`};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 30%;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.secondaryBg};
  }
`

const StyledNavbar = styled(Navbar)`
  background: ${({ theme }) => theme.secondaryBg};
`

const StyledNav = styled(Nav)`
  margin-right: 0;
  margin-left: auto;
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0 0.5rem;

  &,
  &:hover,
  &:active,
  &:focus {
    color: ${({ theme }) => theme.headings} !important;
  }

  > span {
    margin-left: 0.25rem;
  }
`

const StyledNavDropdown = styled(NavDropdown)`
  > div {
    background: ${({ theme }) => theme.secondaryBg};
    border: 1px solid ${({ theme }) => theme.borderColor};
  }

  > a {
    color: ${({ theme }) => theme.headings} !important;
  }

  li:hover {
    background: ${({ theme }) => theme.secondaryBg};
  }
`

const StyledTogglerWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0.5rem;
`

export { Header }
