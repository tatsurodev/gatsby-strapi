import React from "react"
import styled from "styled-components"
import { Row, Col } from "react-bootstrap"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons"

const query = graphql`
  {
    file(relativePath: { eq: "avatar.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <StyledHero>
      <Row className="no-gutters">
        <Col lg={9}>
          <div className="">
            <div className="p-5">
              <h1 className="display-2">I'm Tatsuro</h1>
            </div>
            <div className="sub-leading p-4 bg-dark text-light">
              I love coding with
              <FontAwesomeIcon className="ml-2" icon={faCheckSquare} /> Laravel
              <FontAwesomeIcon className="ml-2" icon={faCheckSquare} /> Vue
              <FontAwesomeIcon className="ml-2" icon={faCheckSquare} /> React
              <FontAwesomeIcon className="ml-2" icon={faCheckSquare} /> Docker
            </div>
          </div>
        </Col>
        <Col lg={3}>
          <Image className="image" fluid={fluid} />
        </Col>
      </Row>
    </StyledHero>
  )
}

const StyledHero = styled.div`
  margin: 2rem;
  .sub-leading {
    background-image: linear-gradient(to right, var(--info), var(--light));
    /* clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%); */
  }

  .image {
    border-radius: 50% 50% 50% 70%/50% 50% 70% 60%;
  }
`

export default Hero
