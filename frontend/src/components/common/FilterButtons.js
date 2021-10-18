import React from 'react'
import styled from 'styled-components'
import { FaMinusCircle, FaHashtag } from 'react-icons/fa'

const FilterButtons = ({
  tags,
  selectedTags,
  handleChange,
  resetArticles,
  className,
}) => {
  return (
    <StyledFilterButtons className={className}>
      <button
        className="btn btn-danger tag reset"
        onClick={resetArticles}
        disabled={selectedTags.length === 0}
      >
        <FaMinusCircle />
        <span>Reset Filters</span>
      </button>
      <form className="tags">
        {tags.map((tag, index) => (
          <div key={index}>
            <input
              type="checkbox"
              name="filters[]"
              value={tag}
              tag={tag}
              id={`checkbox-${tag}`}
              onChange={handleChange}
              checked={selectedTags.includes(tag)}
            />
            <label htmlFor={`checkbox-${tag}`} className="tag">
              <FaHashtag />
              <span>{tag}</span>
            </label>
          </div>
        ))}
      </form>
    </StyledFilterButtons>
  )
}

const StyledFilterButtons = styled.div`
  text-align: center;
  padding: 2rem;
  background: var(--bs-light);
  border-radius: 5px;

  input[type='checkbox'] {
    display: none;
  }

  .tags {
    display: flex;
    justify-content: center;
  }

  .tag {
    margin: 5px;
    padding: 0.25rem 0.5rem;
    height: 2rem;
    border: 2px solid var(--bs-primary);
    cursor: pointer;
    color: var(--bs-primary);
    font-size: 0.875rem;
    line-height: 1.5;
    font-weight: 700;

    svg {
      margin-right: 0.2rem;
      vertical-align: middle;
    }
  }

  .reset {
    color: var(--bs-white);
    border: initial;
    margin-bottom: 1rem;

    :disabled {
      opacity: 0.3;
    }
  }

  input[type='checkbox']:checked + label {
    color: white;
    background: var(--bs-primary);
  }

  label:hover {
    color: white;
    background: var(--bs-primary);
    border-color: var(--bs-primary);
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
`

export { FilterButtons }
