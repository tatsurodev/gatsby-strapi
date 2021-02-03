import React from "react"
import styled, { keyframes } from "styled-components"
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
      <div className="heading">
        <h1 className="leading">I'm Tatsuro</h1>
        <div className="sub-leading">
          <div>I love coding with</div>
          <div className="icon">
            <FontAwesomeIcon icon={faCheckSquare} /> Laravel
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faCheckSquare} /> Vue
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faCheckSquare} /> React
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faCheckSquare} /> Docker
          </div>
        </div>
      </div>
      <div className="image">
        <div className="hero-wrapper">
          <Image className="hero" fluid={fluid} />
          <div className="bg-circle1"></div>
          <div className="bg-circle2"></div>
          <div className="bg-circle3"></div>
        </div>
      </div>
    </StyledHero>
  )
}

const circleRotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const StyledHero = styled.div`
  height: 100vh;
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

  .heading {
    color: white;
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);

    .leading {
      font-size: 5vw;
    }

    .sub-leading {
      font-size: 1.5vw;

      .icon {
        margin-left: 0.2rem;
      }
    }
  }

  .image {
    height: 25vw;
    width: 25vw;
    position: absolute;
    left: 30%;
    top: 50%;
    transform: translate(-50%, -50%);

    .hero-wrapper {
      position: relative;

      > div {
        height: 25vw;
        width: 25vw;
        position: absolute !important;
      }

      .hero {
        z-index: 100;
        border-radius: 50% 50% 50% 70%/50% 50% 70% 60%;
      }
      .bg-circle1 {
        opacity: 0.6;
        background: var(--info);
        border-radius: 50% 50% 50% 70%/50% 50% 70% 60%;
        animation: ${circleRotate} 6s infinite linear;
      }
      .bg-circle2 {
        opacity: 0.4;
        background: var(--light);
        border-radius: 80% 30% 50% 50%/50%;
        animation: ${circleRotate} 12s infinite linear;
      }
      .bg-circle3 {
        opacity: 0.2;
        background: var(--info);
        border-radius: 40% 40% 50% 40%/30% 50% 50% 50%;
        animation: ${circleRotate} 18s infinite linear;
      }
    }
  }
`

export { Hero }
