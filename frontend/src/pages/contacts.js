import React from "react"
import styled from "styled-components"
import useContactValidation from "../hooks/useContactValidation"
import { contactValidation } from "../utils"
import Layout from "../components/Layout"
import { Message, Title, Input } from "../components/common"
import {
  faUser,
  faEnvelope,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons"

const ContactsPage = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
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
    <Layout>
      <StyledContacts className="container">
        <Message />
        <Title title="Contact Me" />
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
            icon={faUser}
            placeholder="Name"
            errors={errors}
            touched={touched}
            validated={validated}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Input
            tag="input"
            type="email"
            name="email"
            values={values}
            icon={faEnvelope}
            placeholder="Email"
            errors={errors}
            touched={touched}
            validated={validated}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Input
            tag="textarea"
            name="message"
            values={values}
            icon={faPencilAlt}
            placeholder="Message"
            errors={errors}
            touched={touched}
            validated={validated}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <button
            type="submit"
            className="btn btn-info btn-block btn-lg"
            disabled={loading}
          >
            Submit
          </button>
        </form>
      </StyledContacts>
    </Layout>
  )
}

const StyledContacts = styled.div`
  padding: 2rem;
`

export default ContactsPage
