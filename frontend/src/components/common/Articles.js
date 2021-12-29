import React from 'react'
import { useLocation } from '@reach/router'
import styled from 'styled-components'
import { Article, NoData } from '.'

const Articles = ({ articles, prefix }) => {
  return (
    <StyledArticles>
      {useLocation().pathname.includes('/tags') && (
        <h2 className="title">{prefix}</h2>
      )}
      <div className="row">
        {articles.length === 0 ? (
          <div className="col">
            <NoData />
          </div>
        ) : (
          articles.map(article => (
            <Article
              key={article.id}
              article={article}
              prefix={prefix}
              className="col-md-6 col-lg-4"
            />
          ))
        )}
      </div>
    </StyledArticles>
  )
}

const StyledArticles = styled.div`
  margin-bottom: 1rem;

  .title {
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
`

export { Articles }
