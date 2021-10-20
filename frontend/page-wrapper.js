import React from 'react'
import GlobalStyle from './src/css/GlobalStyle'
import { Layout } from './src/components/layout'
import 'bootswatch/dist/pulse/bootstrap.min.css'
import { MDXProvider } from '@mdx-js/react'
import { H1, H2, H3, Code, Notice, Prism } from './src/components/blogs'

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  inlineCode: Code,
  section: Notice,
  pre: Prism,
}

// app全体のuiに関するような処理をwrapPageElementに記述
export const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <GlobalStyle />
      <Layout {...props}>
        <MDXProvider components={components}>{element}</MDXProvider>
      </Layout>
    </>
  )
}
