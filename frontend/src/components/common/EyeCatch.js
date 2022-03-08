import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const EyeCatch = ({ image, url }) => {
  return (
    <StyledEyeCatch>
      {image && url ? (
        <a href={url} target="_blank" rel="noreferrer">
          <StyledGatsbyImage image={getImage(image)} alt="image" />
        </a>
      ) : (
        <StyledGatsbyImage image={getImage(image)} alt="image" />
      )}
    </StyledEyeCatch>
  )
}

const StyledEyeCatch = styled.div`
  margin: 0;
  text-align: center;
`

const StyledGatsbyImage = styled(GatsbyImage)`
  border-radius: 10px;
`

export { EyeCatch }
