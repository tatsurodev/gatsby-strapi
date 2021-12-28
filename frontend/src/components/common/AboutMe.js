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
      <Link to="/about">
        <StaticImage
          src="../../images/avatar.png"
          alt="avatar"
          layout="fullWidth"
          placeholder="blurred"
          className="avatar"
        />
        <div className="name">タツロー</div>
      </Link>
      <div className="social-links">
        {socialLinks.forEach((link, index) => {
          if (link.component === 'AboutUs') {
            return (
              <a
                href={link.url}
                key={index}
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                {link.icon}
              </a>
            )
          }
        })}
      </div>
      <div className="description">{aboutMe}</div>
    </StyledAboutMe>
  )
}

const StyledAboutMe = styled.div`
  padding: 1rem;
  background: var(--bs-white);
  border: 1px solid var(--bs-gray-200);
  border-radius: 10px;

  .avatar {
    margin: 1rem auto;
    width: 40%;
    border: 1px solid var(--bs-gray-200);
    border-radius: 50%;
  }

  .name {
    font-size: 1rem;
    text-decoration: none;
    text-align: center;
  }

  .social-links {
    text-align: center;
  }

  .social-link {
    margin: 0.5rem;
  }

  .description {
    margin-top: 1rem;
    font-size: 0.9rem;
  }
`

export { AboutMe }
