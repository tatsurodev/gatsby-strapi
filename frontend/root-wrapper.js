import React from 'react'

// app全体をwrapするproviderのような処理をwrapRootElementに記述
export const wrapRootElement = ({ element }) => {
  return <>{element}</>
}
