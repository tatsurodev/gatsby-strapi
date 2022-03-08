import React from 'react'
import { useLocation } from '@reach/router'
import styled from 'styled-components'
import { Article, NoData } from '.'

const Articles = ({ articles, prefix }) => {
  return (
    <StyledArticles>
      {useLocation().pathname.includes('/tags') && (
        <StyledH2>{prefix}</StyledH2>
      )}
      <div className="row">
        {articles.length === 0 ? (
          <div className="col">
            <NoData />
          </div>
        ) : (
          articles.map(article => (
            <div className="col-md-6 col-lg-4" key={article.id}>
              <Article article={article} prefix={prefix} />
            </div>
          ))
        )}
      </div>
    </StyledArticles>
  )
}

const StyledArticles = styled.div`
  margin-bottom: 1rem;
`

const StyledH2 = styled.h2`
  text-transform: capitalize;
  margin-bottom: 1rem;
`

export { Articles }
