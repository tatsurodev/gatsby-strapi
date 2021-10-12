import React from 'react'
import GlobalStyle from './src/css/GlobalStyle'
import 'bootswatch/dist/pulse/bootstrap.min.css'

// app全体のuiに関するような処理をwrapPageElementに記述
export const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  )
}
