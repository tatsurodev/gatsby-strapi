import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { FiSun, FiMoon } from 'react-icons/fi'

const Toggler = () => {
  const { id, toggleTheme } = useContext(ThemeContext)
  const icon = id === 'light' ? <FiSun /> : <FiMoon />

  return <StyledToggler onClick={toggleTheme}>{icon}</StyledToggler>
}

const StyledToggler = styled.span`
  display: flex;
  margin-top: 2px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.toggleIcon};
  transition: all ${({ theme }) => theme.transitionTime};
  cursor: pointer;
`

export { Toggler }
