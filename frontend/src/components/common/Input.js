import React from 'react'
import styled from 'styled-components'

const Input = ({
  tag,
  type,
  name,
  placeholder,
  values,
  touched,
  validated,
  errors,
  children,
  // rest parameterは最後に記述、...props, のように , をつけると最後のparamsとみなされなくなるので注意
  ...props
}) => {
  const toggleValidity = nameAttr => {
    let className = 'form-control'
    // 該当項目のerrorなし、touche済、validated済
    if (!errors[nameAttr] && touched[nameAttr] && validated[nameAttr]) {
      className += ' is-valid'
    }
    if (errors[nameAttr]) {
      className += ' is-invalid'
    }
    return className
  }

  return (
    <StyledInput className="input-group">
      <span className="input-group-text bg-primary text-white">{children}</span>
      {tag === 'input' && (
        <input
          type={type}
          name={name}
          value={values[name]}
          placeholder={placeholder}
          className={toggleValidity(name)}
          {...props}
        />
      )}
      {tag === 'textarea' && (
        <textarea
          name={name}
          value={values[name]}
          placeholder={placeholder}
          className={toggleValidity(name)}
          {...props}
        ></textarea>
      )}
      {errors[name] ? (
        <div className="feedback invalid-feedback">
          <p className="error-text">{errors[name]}</p>
        </div>
      ) : (
        <div className="feedback valid-feedback">Looks good!</div>
      )}
    </StyledInput>
  )
}

const StyledInput = styled.div`
  margin-bottom: 0.5rem;

  .feedback {
    margin-left: 0.5rem;
  }

  .error-text {
    margin: 0;
  }
`

export { Input }
