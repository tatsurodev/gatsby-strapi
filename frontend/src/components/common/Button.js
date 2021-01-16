import React from "react"
import styled from "styled-components"
import { Button as BsButton } from "react-bootstrap"

const Button = () => {
  return <StyledButton variant="danger">button</StyledButton>
}

const StyledButton = styled(BsButton)`
  font-weight: bold;
`

export { Button }
