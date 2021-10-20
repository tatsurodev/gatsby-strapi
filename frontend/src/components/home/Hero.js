import React from 'react'
import styled, { keyframes } from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { FaCheckSquare } from 'react-icons/fa'

const Hero = () => {
  return (
    <StyledHero>
      <div className="heading">
        <h1 className="leading">I'm Tatsuro</h1>
        <div className="sub-leading">
          <div>I love coding with</div>
          <div className="skill">
            <FaCheckSquare className="icon" /> Laravel
          </div>
          <div className="skill">
            <FaCheckSquare className="icon" /> Vue
          </div>
          <div className="skill">
            <FaCheckSquare className="icon" /> React
          </div>
          <div className="skill">
            <FaCheckSquare className="icon" /> Docker
          </div>
        </div>
      </div>
      <div className="image">
        <div className="hero-wrapper">
          <StaticImage
            src="../../images/avatar.png"
            alt="avatar"
            layout="fullWidth"
            placeholder="blurred"
            className="hero"
          />
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
    content: '';
    position: absolute;
    top: 0;
    left: 30%;
    right: 0;
    bottom: 0;
    background: var(--bs-primary);
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
      padding: 0 2rem;
      font-size: 1.5vw;

      .skill {
        display: flex;
        align-items: center;
      }

      .icon {
        margin: 0 0.2rem;
      }

      > div {
        margin: 1rem 0;
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
        background: var(--bs-primary);
        border-radius: 50% 50% 50% 70%/50% 50% 70% 60%;
        animation: ${circleRotate} 6s infinite linear;
      }
      .bg-circle2 {
        opacity: 0.4;
        background: var(--bs-light);
        border-radius: 80% 30% 50% 50%/50%;
        animation: ${circleRotate} 12s infinite linear;
      }
      .bg-circle3 {
        opacity: 0.2;
        background: var(--bs-primary);
        border-radius: 40% 40% 50% 40%/30% 50% 50% 50%;
        animation: ${circleRotate} 18s infinite linear;
      }
    }
  }
`

export { Hero }
