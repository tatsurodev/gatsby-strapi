import React from 'react'

// app全体のuiに関するような処理をwrapPageElementに記述
export const wrapPageElement = ({ element, props }) => {
  return <>{element}</>
}
