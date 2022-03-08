import React from 'react'
import styled from 'styled-components'
import { FaGlobeAmericas, FaGithub } from 'react-icons/fa'
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image'
import ReactMarkdown from 'react-markdown'
import { H1, mapTagsToComponents } from '../blogs'

const Websites = ({ websites }) => (
  <StyledWebsites>
    <H1 center fontSize="1.2rem">
      Demo & Github
    </H1>
    <div className="row">
      {websites.map(
        ({ title, description, image, github, url, tags }, index) => {
          return (
            <div key={index} className="col-md-6">
              <StyledWebsite key={index}>
                {image ? (
                  <GatsbyImage
                    image={getImage(image.localFile)}
                    alt="image"
                    className="website__image"
                  />
                ) : (
                  <StaticImage
                    src="../../images/website-default.jpg"
                    alt={title}
                    layout="fullWidth"
                    placeholder="blurred"
                    className="website__image"
                  />
                )}
                <StyledWebsiteBody>
                  <h4>{title}</h4>
                  {description && (
                    <ReactMarkdown components={mapTagsToComponents}>
                      {description}
                    </ReactMarkdown>
                  )}
                </StyledWebsiteBody>
                <StyledWebsiteFooter>
                  <div className="row">
                    <div className="col-6">
                      <StyledA href={url}>
                        <FaGlobeAmericas />
                        <span>Demo</span>
                      </StyledA>
                    </div>
                    <div className="col-6">
                      <StyledA href={github}>
                        <FaGithub />
                        <span>Github</span>
                      </StyledA>
                    </div>
                  </div>
                </StyledWebsiteFooter>
              </StyledWebsite>
            </div>
          )
        }
      )}
    </div>
  </StyledWebsites>
)

const StyledWebsites = styled.div``

const StyledWebsite = styled.div`
  margin-top: 2rem;
  border-radius: 10px;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.primaryBg};
  border: 1px solid ${({ theme }) => theme.borderColor};

  // StaticImageはstyled helperで参照不可なので例外的にclassでstyle追加
  > .website__image {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    height: 15rem;
  }
`

const StyledWebsiteBody = styled.div`
  padding: 1rem;

  > h4 {
    margin-bottom: 0.5rem;
  }

  > ul {
    margin-left: 0.5rem;
  }

  > p,
  li {
    font-size: 0.9rem;
  }
`

const StyledWebsiteFooter = styled.div`
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.secondaryBg};
`

const StyledA = styled.a`
  display: block;
  padding: 0.5rem 0;

  &:hover {
    opacity: 0.8;
  }

  > svg {
    vertical-align: middle;
  }

  > span {
    margin-left: 0.5rem;
    font-size: 0.8rem;
  }
`

export { Websites }
