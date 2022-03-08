import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FaTags, FaHashtag } from 'react-icons/fa'

const Tags = ({ tags }) => {
  return (
    <StyledTags>
      <StyledIcon>
        <FaTags />
      </StyledIcon>
      <StyledTagsWrapper>
        {tags.map((tag, index) => (
          <StyledLink key={index} to={`/tags/${tag.toLowerCase()}`}>
            <FaHashtag />
            <span>{tag}</span>
          </StyledLink>
        ))}
      </StyledTagsWrapper>
    </StyledTags>
  )
}

const StyledTags = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
`

const StyledIcon = styled.div`
  > svg {
    vertical-align: middle;
  }
`

const StyledTagsWrapper = styled.div`
  margin-left: 0.5rem;
  display: flex;
  flex-wrap: wrap;
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0.25rem;
  padding: 0.2rem 0.4rem;
  border-radius: 0.8rem;
  border: 1px solid rgba(0, 0, 0, 0);
  background: ${({ theme }) => theme.btnPrimaryBg};
  color: ${({ theme }) => theme.btnPrimaryText};

  &:hover {
    background: ${({ theme }) => theme.btnPrimaryBgHover};
    color: ${({ theme }) => theme.btnPrimaryTextHover};
  }

  > svg {
    margin-right: 0.1rem;
  }
`

export { Tags }
