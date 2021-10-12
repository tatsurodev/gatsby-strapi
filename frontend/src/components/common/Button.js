import React from 'react'
import styled from 'styled-components'
import { Button as BsButton } from 'react-bootstrap'
import 'bootswatch/dist/litera/bootstrap.min.css'

const Button = ({ children }) => {
  return <StyledButton variant="danger">{children}</StyledButton>
}

// styled()で既存のcomponentを拡張
const StyledButton = styled(BsButton)`
  font-weight: bold;
`

export { Button }
