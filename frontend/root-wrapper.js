import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
/* Variables */
:root {
  --grey: #6c757d;
}

/* Global Styles */
body {
  color: var(--grey);
}

a:hover {
  text-decoration: none;
}
`

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  )
}
