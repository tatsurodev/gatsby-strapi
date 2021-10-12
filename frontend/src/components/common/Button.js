import React from 'react'
import { Button as BsButton } from 'react-bootstrap'
import 'bootswatch/dist/litera/bootstrap.min.css'

const Button = ({ children }) => {
  return <BsButton variant="danger">{children}</BsButton>
}

export { Button }
