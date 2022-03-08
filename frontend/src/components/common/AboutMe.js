import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import socialLinks from '../../constants/socialLinks'
import { StaticImage } from 'gatsby-plugin-image'

const AboutMe = () => {
  const query = graphql`
    {
      strapiAbout {
        aboutMe
      }
    }
  `

  const data = useStaticQuery(query)
  const {
    strapiAbout: { aboutMe },
  } = data

  return (
    <StyledAboutMe>
      <h4>About Me</h4>
      <StyledLink to="/about">
        <StaticImage
          src="../../images/avatar.png"
          alt="avatar"
          layout="fullWidth"
          placeholder="blurred"
          className="about-me__avatar"
        />
        <div>タツロー</div>
      </StyledLink>
      <StyledSocialLinks>
        {socialLinks.map((link, index) => {
          if (link.component === 'AboutMe') {
            return (
              <a href={link.url} key={index} target="_blank" rel="noreferrer">
                {link.icon}
              </a>
            )
          }
        })}
      </StyledSocialLinks>
      <StyledDescription>{aboutMe}</StyledDescription>
    </StyledAboutMe>
  )
}

const StyledAboutMe = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.primaryBg};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 10px;
`

// StaticImageはhocが使用できないので、例外的にclass名を与えてstyling
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#using-staticimage-with-css-in-js-libraries
// const StyledStaticImage = styled(StaticImage)``

const StyledLink = styled(Link)`
  display: block;

  &:visited {
    color: ${({ theme }) => theme.text};
  }

  &:hover {
    opacity: 0.8;
  }

  > .about-me__avatar {
    margin: 1rem auto;
    width: 40%;
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 50%;
  }

  > div {
    font-size: 1rem;
    text-align: center;
  }
`

const StyledSocialLinks = styled.div`
  text-align: center;

  > a {
    margin: 0.5rem;
    color: ${({ theme }) => theme.text};

    &:hover {
      opacity: 0.8;
    }
  }
`

const StyledDescription = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
`

export { AboutMe }
