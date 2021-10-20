import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import { SubTitle, Article } from '../common'

const FeaturedArticles = ({ articles, className }) => {
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
    <StyledFeaturedArticles className={className}>
      <div className="heading">
        <SubTitle title={title} className="title" />
        {pathname === '/' && (
          <Link
            to={`/${prefix}`}
            className={`btn ${
              className === 'primary'
                ? 'btn-outline-light'
                : 'btn-outline-primary'
            }`}
          >
            {`Check Other ${prefix}`}
          </Link>
        )}
      </div>
      <div className="articles container">
        <div className="row">
          {articles.map(article => {
            return (
              <Article
                key={article.id}
                article={article}
                prefix={prefix}
                className="col-md-6"
              />
            )
          })}
        </div>
      </div>
    </StyledFeaturedArticles>
  )
}

const bgWhite = props => css`
  // ${console.log(props.className)}
  background: ${props.className === 'primary'
    ? 'var(--bs-white)'
    : 'var(--bs-primary)'};
`

const bgPrimary = props => css`
  background: ${props.className === 'primary'
    ? 'var(--bs-primary)'
    : 'var(--bs-white)'};
`
const textWhite = props => css`
  color: ${props.className === 'primary'
    ? 'var(--bs-white)'
    : 'var(--bs-dark)'};
`

const StyledFeaturedArticles = styled.div`
  position: relative;
  ${bgPrimary}
  display: grid;
  grid-template-rows: 50% 50%;
  grid-template-columns: 30% 35% 35%;
  padding: 1rem;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 30%;
    right: 0;
    bottom: 0;
    ${bgWhite}
  }

  .heading {
    ${textWhite}
    text-align: center;
    position: absolute;
    top: 50%;
    left: 15%;
    transform: translateY(-50%) translateX(-50%);

    a {
      font-size: 1.2vw;
      text-align: center;
    }

    .title {
      font-size: 1.6vw;
    }

    .btn {
      margin-top: 1rem;
    }

    .btn-outline-light: hover {
      color: var(--bs-primary);
      border-color: var(--bs-primary);
    }
  }

  .articles {
    padding: 0 2rem;
    grid-row: 1/3;
    grid-column: 2/4;
  }
`

export { FeaturedArticles }
