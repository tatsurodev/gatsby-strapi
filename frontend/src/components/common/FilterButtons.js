import React from 'react'
import styled from 'styled-components'
import { FaMinusCircle, FaHashtag } from 'react-icons/fa'

const FilterButtons = ({ tags, selectedTags, handleChange, resetArticles }) => {
  return (
    <StyledFilterButtons>
      <StyledButton
        reset
        onClick={resetArticles}
        disabled={selectedTags.length === 0}
      >
        <FaMinusCircle />
        <span>reset filters</span>
      </StyledButton>
      <StyledForm>
        {tags.map((tag, index) => (
          <div key={index}>
            <StyledInput
              type="checkbox"
              name="filters[]"
              value={tag}
              tag={tag}
              id={`checkbox-${tag}`}
              onChange={handleChange}
              checked={selectedTags.includes(tag)}
            />
            <StyledLabel htmlFor={`checkbox-${tag}`}>
              <FaHashtag />
              <span>{tag}</span>
            </StyledLabel>
          </div>
        ))}
      </StyledForm>
    </StyledFilterButtons>
  )
}

const StyledFilterButtons = styled.div`
  text-align: center;
  padding: 2rem;
  background: ${({ theme }) => theme.secondaryBg};
  border-radius: 5px;
`

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
`

const StyledInput = styled.input`
  display: none;

  &:checked + label {
    background: ${({ theme }) => theme.btnPrimaryBgHover};
    color: ${({ theme }) => theme.btnPrimaryTextHover};
  }
`

const StyledButton = styled.button`
  margin: 0.25rem 0.25rem ${({ reset }) => (reset ? '2rem' : '0.25rem')} 0.25rem;
  padding: 0.2rem 0.4rem;
  border-radius: 0.8rem;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0);
  background: ${({ theme, reset }) =>
    reset ? theme.btnDangerBg : theme.btnPrimaryBg};
  color: ${({ theme, reset }) => (reset ? theme.text : theme.btnPrimaryText)};

  > svg {
    margin-right: 0.2rem;
    vertical-align: text-bottom;
  }

  &:hover {
    color: ${({ theme, reset }) =>
      reset ? theme.text : theme.btnPrimaryTextHover};
    background: ${({ theme, reset }) =>
      reset ? theme.btnDangerBg : theme.btnPrimaryBgHover};
    border-color: ${({ theme }) => theme.borderColor};
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  &:disabled {
    opacity: 0.3;
  }
`

const StyledLabel = StyledButton.withComponent('label')

export { FilterButtons }
