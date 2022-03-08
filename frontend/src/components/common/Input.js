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
      <span className="input-group-text">{children}</span>
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
        <p className="invalid-feedback">{errors[name]}</p>
      ) : (
        <p className="valid-feedback">Looks good!</p>
      )}
    </StyledInput>
  )
}

const StyledInput = styled.div`
  margin-bottom: 0.5rem;

  > span {
    background: ${({ theme }) => theme.secondaryBg};
    color: ${({ theme }) => theme.text};
    border-radius: 5px 0 0 5px;
    border: 1px solid ${({ theme }) => theme.borderColor};
  }

  > input,
  textarea {
    border-radius: 0 5px 5px 0;
    border: 1px solid ${({ theme }) => theme.borderColor};
  }
`

export { Input }
