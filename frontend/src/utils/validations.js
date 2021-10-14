const contactValidation = values => {
  let errors = {}
  // name errors
  if (!values.name) {
    errors.name = 'Name required'
  }
  // email errors
  if (!values.email) {
    errors.email = 'Email requried'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  // message errors
  if (!values.message) {
    errors.message = 'Message required'
  } else if (values.message.length < 10) {
    errors.message = 'Message must be at least 10 characters'
  }
  return errors
}

export { contactValidation }
