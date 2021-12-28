import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const EyeCatch = ({ image, url }) => {
  return (
    <StyledEyeCatch>
      {image && url ? (
        <a href={url} target="_blank" rel="noreferrer">
          <GatsbyImage image={getImage(image)} alt="image" className="image" />
        </a>
      ) : (
        <GatsbyImage image={getImage(image)} alt="image" className="image" />
      )}
    </StyledEyeCatch>
  )
}

const StyledEyeCatch = styled.div`
  margin: 0;
  text-align: center;

  .image {
    border-radius: 10px;
  }
`

export { EyeCatch }
