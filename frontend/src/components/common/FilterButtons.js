import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinusCircle, faHashtag } from "@fortawesome/free-solid-svg-icons"

const FilterButtons = ({
  tags,
  selectedTags,
  handleChange,
  resetInstances,
  className,
}) => {
  return (
    <StyledFilterButtons className={className}>
      <button
        className="reset btn btn-primary btn-sm"
        onClick={resetInstances}
        disabled={selectedTags.length === 0}
      >
        <FontAwesomeIcon icon={faMinusCircle} />
        <span>Reset Filters</span>
      </button>
      <form>
        {tags.map(tag => (
          <>
            <input
              type="checkbox"
              name="filters[]"
              value={tag}
              tag={tag}
              id={`checkbox-${tag}`}
              onChange={handleChange}
              checked={selectedTags.includes(tag)}
            />
            <label htmlFor={`checkbox-${tag}`}>
              <FontAwesomeIcon icon={faHashtag} />
              {tag}
            </label>
          </>
        ))}
      </form>
    </StyledFilterButtons>
  )
}

const StyledFilterButtons = styled.div`
  text-align: center;
  padding: 2rem;
  background: var(--light);
  border-radius: 5px;

  .reset {
    margin-bottom: 1rem;
    span {
      margin-left: 0.5rem;
    }
    :disabled {
      opacity: 0.3;
    }
  }

  input[type="checkbox"] {
    display: none;
  }

  label {
    margin: 5px;
    padding: 0.25rem 0.5rem;
    height: 2rem;
    border: 2px solid var(--cyan);
    border-radius: 0.2rem;
    cursor: pointer;
    color: var(--cyan);
    font-size: 0.875rem;
    line-height: 1.5;
    font-weight: 700;
  }

  input[type="checkbox"]:checked + label {
    color: white;
    background: var(--info);
  }
  label:hover {
    color: white;
    background: var(--info);
    border-color: var(--info);
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
`

export { FilterButtons }
