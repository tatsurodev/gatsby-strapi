import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Input = ({
  tag,
  type,
  name,
  placeholder,
  icon,
  values,
  touched,
  validated,
  errors,
  ...props
}) => {
  const toggleValidity = nameAttr => {
    let className = "form-control"
    // 該当項目のerrorなし、touche済、validated済
    if (!errors[nameAttr] && touched[nameAttr] && validated[nameAttr]) {
      className += " is-valid"
    }
    if (errors[nameAttr]) {
      className += " is-invalid"
    }
    return className
  }

  return (
    <div className="form-group ">
      <div className="input-group input-group-lg  position-relative">
        <div className="input-group-prepend">
          <span className="input-group-text bg-info text-white">
            <FontAwesomeIcon icon={icon} />
          </span>
        </div>
        {tag === "input" && (
          <input
            type={type}
            name={name}
            value={values[name]}
            placeholder={placeholder}
            className={toggleValidity(name)}
            {...props}
          />
        )}
        {tag === "textarea" && (
          <textarea
            name={name}
            value={values[name]}
            placeholder={placeholder}
            className={toggleValidity(name)}
            {...props}
          ></textarea>
        )}
        {errors[name] ? (
          <div className="invalid-feedback">
            <p className="error-text">{errors[name]}</p>
          </div>
        ) : (
          <div className="valid-feedback">Looks good!</div>
        )}
      </div>
    </div>
  )
}

export { Input }
