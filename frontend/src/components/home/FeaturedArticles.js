import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import { SubTitle, Articles } from '../common'

const FeaturedArticles = ({ articles, ...props }) => {
  const firstArticleId = articles[0].id
  let prefix, title
  if (firstArticleId.includes('Portfolios')) {
    prefix = 'portfolios'
    title = 'Featured Portfolios'
  } else if (firstArticleId.includes('Reviews')) {
    prefix = 'reviews'
    title = 'Featured Reviews'
  } else {
    prefix = 'blogs'
    title = 'Recent Blogs'
  }
  const { pathname } = useLocation()

  return (
    <StyledFeaturedArticles {...props}>
      <StyledHeading>
        <SubTitle fontSize="1.6vw" title={title} />
        {pathname === '/' && (
          <Link to={`/${prefix}`}>{`Check Other ${prefix}`}</Link>
        )}
      </StyledHeading>
      <StyledArticles>
        <Articles articles={articles} prefix={prefix} />
      </StyledArticles>
    </StyledFeaturedArticles>
  )
}

const StyledFeaturedArticles = styled.div`
  position: relative;
  // react componentで受け取ったpropsをstyled componentに渡すことでprops.paramNameでaccessできる
  // ${({ theme, even }) => console.log('theme', theme, 'even', even)}
  background: ${({ theme, even }) =>
    even ? theme.primaryBg : theme.secondaryBg};
  display: grid;
  grid-template-rows: 50% 50%;
  grid-template-columns: 30% 35% 35%;
  padding: 1rem;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 30%;
    right: 0;
    bottom: 0;
    background: ${({ theme, even }) =>
      even ? theme.secondaryBg : theme.primaryBg};
    z-index: -100;
  }
`

const StyledHeading = styled.div`
  color: ${({ theme }) => theme.text};
  text-align: center;
  position: absolute;
  top: 50%;
  left: 15%;
  transform: translateY(-50%) translateX(-50%);
`

const StyledArticles = styled.div`
  padding: 0 2rem;
  grid-row: 1/3;
  grid-column: 2/4;
`

export { FeaturedArticles }
