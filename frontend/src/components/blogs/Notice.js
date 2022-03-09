import React from 'react'
import styled, { css } from 'styled-components'
import { FiInfo } from 'react-icons/fi'
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa'
import { TiWarningOutline, TiLightbulb } from 'react-icons/ti'

const Notice = ({ children, ...props }) => {
  const { info, success, warning, danger } = props
  const Icon = info
    ? FiInfo
    : success
    ? FaRegThumbsUp
    : warning
    ? TiWarningOutline
    : danger
    ? FaRegThumbsDown
    : TiLightbulb

  return (
    <StyledNotice {...props}>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      {children}
    </StyledNotice>
  )
}

const variation = ({ info, success, warning, danger }) => {
  if (info) {
    return css`
      background: ${({ theme }) => theme.primary};
    `
  } else if (success) {
    return css`
      background: ${({ theme }) => theme.success};
    `
  } else if (warning) {
    return css`
      background: ${({ theme }) => theme.warning};
    `
  } else if (danger) {
    return css`
      background: ${({ theme }) => theme.danger};
    `
  } else {
    return css`
      background: ${({ theme }) => theme.secondaryBg};
    `
  }
}

const StyledNotice = styled.div`
  color: ${({ theme }) => theme.text};
  padding: 2rem;
  border-radius: 10px;
  border-left: 5px solid ${({ theme }) => theme.borderColor};
  position: relative;
  margin: 2rem 1rem;
  ${variation}
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primaryBg};

  > svg {
    font-size: 1.6rem;
  }
`

export { Notice }
