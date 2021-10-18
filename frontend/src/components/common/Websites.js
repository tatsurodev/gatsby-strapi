import React from 'react'
import styled from 'styled-components'
import { FaGlobeAmericas, FaGithub } from 'react-icons/fa'
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image'

const Websites = ({ websites, className }) => (
  <StyledWebsites className={className}>
    <h3 className="demo-title">Demo & Github</h3>
    <div className="row">
      {websites.map(
        ({ title, description, image, github, url, tags }, index) => {
          return (
            <div key={index} className="col-md-6">
              <div className="card">
                {image ? (
                  <GatsbyImage
                    image={getImage(image.localFile)}
                    alt="image"
                    className="card-img image"
                  />
                ) : (
                  <StaticImage
                    src="../../images/website-default.jpg"
                    alt={title}
                    layout="fullWidth"
                    placeholder="blurred"
                    className="image"
                  />
                )}
                <div className="card-body">
                  <h4 className="card-title">{title}</h4>
                  {description && <p className="card-text">{description}</p>}
                </div>
                <div className="card-footer">
                  <div className="row">
                    <div className="col-6">
                      <a
                        className="btn btn-outline-dark me-2 d-block "
                        href={url}
                      >
                        <FaGlobeAmericas />
                        <span>Demo</span>
                      </a>
                    </div>
                    <div className="col-6">
                      <a
                        className="btn btn-outline-dark me-2 d-block"
                        href={github}
                      >
                        <FaGithub />
                        <span>Github</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      )}
    </div>
  </StyledWebsites>
)

const StyledWebsites = styled.div`
  .demo-title {
    margin-bottom: 2rem;
    padding: 0.5rem;
    color: var(--bs-white);
    background: var(--bs-primary);
    border-radius: 10px;
    text-align: center;
  }

  .card {
    svg {
      vertical-align: middle;
    }

    .image {
      height: 10rem;
    }

    span {
      margin-left: 0.5rem;
      font-size: 0.8rem;
    }
  }
`

export { Websites }
