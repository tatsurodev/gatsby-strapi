import React from 'react'
import styled, { keyframes } from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { FaCheckSquare } from 'react-icons/fa'
import { hero } from '../../constants/hero'

const Hero = () => {
  const { leading, subleading, skills } = hero

  return (
    <StyledHero>
      <StyledHeadings>
        <h1>{leading}</h1>
        <StyledSkills>
          <p>{subleading}</p>
          {skills.map(skill => (
            <StyledSkill key={skill}>
              <FaCheckSquare /> {skill}
            </StyledSkill>
          ))}
        </StyledSkills>
      </StyledHeadings>
      <StyledImageWrapper>
        <StyledImage>
          <StaticImage
            src="../../images/avatar.png"
            alt="avatar"
            layout="fullWidth"
            placeholder="blurred"
            className="hero__image"
          />
          <StyledImageBgCircle1 />
          <StyledImageBgCircle2 />
          <StyledImageBgCircle3 />
        </StyledImage>
      </StyledImageWrapper>
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

const StyledHeadings = styled.div`
  color: ${({ theme }) => theme.headings};
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);

  > h1 {
    font-size: 5vw;
  }
`

const StyledSkills = styled.div`
  padding: 0 2rem;
  font-size: 1.5vw;

  > p {
    margin: 1rem 0;
  }
`

const StyledSkill = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;

  > svg {
    margin: 0 0.2rem;
  }
`

const StyledImageWrapper = styled.div`
  height: 25vw;
  width: 25vw;
  position: absolute;
  left: 30%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const StyledImage = styled.div`
  position: relative;

  > div {
    height: 25vw;
    width: 25vw;
    position: absolute !important;
  }

  > .hero__image {
    z-index: 100;
    border-radius: 50% 50% 50% 70%/50% 50% 70% 60%;
  }
`

const StyledImageBgCircle1 = styled.div`
  opacity: 0.6;
  background: ${({ theme }) => theme.oppositePrimaryBg};
  border-radius: 50% 50% 50% 70%/50% 50% 70% 60%;
  animation: ${circleRotate} 6s infinite linear;
`

const StyledImageBgCircle2 = styled.div`
  opacity: 0.4;
  background: ${({ theme }) => theme.primaryBg};
  border-radius: 80% 30% 50% 50%/50%;
  animation: ${circleRotate} 12s infinite linear;
`

const StyledImageBgCircle3 = styled.div`
  opacity: 0.2;
  background: ${({ theme }) => theme.oppositePrimaryBg};
  border-radius: 40% 40% 50% 40%/30% 50% 50% 50%;
  animation: ${circleRotate} 18s infinite linear;
`

export { Hero }
