import React from 'react'
import styled from 'styled-components'
import useContactValidation from '../hooks/useContactValidation'
import { contactValidation } from '../utils'
import { Title, Message, Input } from '../components/common'
import { FaUser, FaEnvelope, FaPencilAlt } from 'react-icons/fa'

const ContactsPage = ({ pageContext, location }) => {
  const initialState = {
    name: '',
    email: '',
    message: '',
  }
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    touched,
    validated,
    errors,
    loading,
  } = useContactValidation(initialState, contactValidation)
  // console.log("values", values)
  // console.log("touched", touched)
  // console.log("validated", validated)
  // console.log("errors", errors)
  // console.log("loading", loading)

  return (
    <StyledContactsPage className="container">
      <Message location={location} />
      <Title title="Contacts" pageContext={pageContext} />
      <form
        onSubmit={handleSubmit}
        name="contact"
        method="post"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <Input
          tag="input"
          type="text"
          name="name"
          values={values}
          placeholder="Name"
          errors={errors}
          touched={touched}
          validated={validated}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <FaUser />
        </Input>
        <Input
          tag="input"
          type="email"
          name="email"
          values={values}
          placeholder="Email"
          errors={errors}
          touched={touched}
          validated={validated}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <FaEnvelope />
        </Input>
        <Input
          tag="textarea"
          name="message"
          values={values}
          placeholder="Message"
          errors={errors}
          touched={touched}
          validated={validated}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <FaPencilAlt />
        </Input>
        <StyledButton type="submit" className="btn" disabled={loading}>
          Submit
        </StyledButton>
      </form>
    </StyledContactsPage>
  )
}

const StyledContactsPage = styled.div`
  padding: 2rem;
`

const StyledButton = styled.button`
  display: block;
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.secondaryBg};

  &:hover {
    color: inherit;
    opacity: 0.8;
  }
`

export default ContactsPage
