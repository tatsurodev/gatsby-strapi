import React from 'react'
import GlobalStyle from './src/css/GlobalStyle'
import { Layout } from './src/components/layout'
import 'bootswatch/dist/pulse/bootstrap.min.css'
import { MDXProvider } from '@mdx-js/react'
import { mapTagsToComponents } from './src/components/blogs'

// app全体のuiに関するような処理をwrapPageElementに記述
export const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <GlobalStyle />
      <Layout {...props}>
        <MDXProvider components={mapTagsToComponents}>{element}</MDXProvider>
      </Layout>
    </>
  )
}
