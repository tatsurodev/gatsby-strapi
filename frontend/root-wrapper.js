import React from "react"
import { createGlobalStyle } from "styled-components"
import { MDXProvider } from "@mdx-js/react"
import { H1 } from "./src/components/blogs"

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

const components = {
  h1: H1,
}

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      <MDXProvider components={components}>{element}</MDXProvider>
    </>
  )
}
