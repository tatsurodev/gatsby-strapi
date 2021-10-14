import React from 'react'
import styled from 'styled-components'
import { useLocation } from '@reach/router'
import { Container, Row, Col } from 'react-bootstrap'
const Footer = () => {
  const isHome = useLocation().pathname === '/'

  return (
    <StyledFooter>
      <div className={isHome ? 'home' : ''}>
        <Container>
          <Row>
            <Col>Copyright {new Date().getFullYear()} &copy; tatsuro.dev</Col>
          </Row>
        </Container>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  padding: 1.2rem;
  color: var(--bs-white);
  text-align: center;
  position: relative;
  background: var(--bs-primary);

  .home {
    color: var(--bs-gray);
    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 30%;
      right: 0;
      bottom: 0;
      background: var(--bs-white);
    }
  }
`

export { Footer }
