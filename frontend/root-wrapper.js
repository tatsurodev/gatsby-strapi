import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './src/css/theme'

// app全体をwrapするproviderのような処理をwrapRootElementに記述
const ThemeProviderWrapper = ({ element }) => {
  const [theme, setTheme] = useState(lightTheme)
  const toggleTheme = () => {
    setTheme(prevState => (prevState.id === 'light' ? darkTheme : lightTheme))
  }

  // localStorageからthemeを読み取り
  useEffect(() => {
    const localThemeId = window.localStorage.getItem('theme')
    localThemeId === 'light' ? setTheme(lightTheme) : setTheme(darkTheme)
  }, [])

  // themeが変更されるたびlocalStorageをset
  useEffect(() => {
    window.localStorage.setItem('theme', theme.id)
  }, [theme])

  return (
    <ThemeProvider
      theme={{
        ...theme,
        toggleTheme,
      }}
    >
      {element}
    </ThemeProvider>
  )
}

const Wrapper = ({ element }) => {
  return <ThemeProviderWrapper element={element} />
}

export const wrapRootElement = Wrapper
