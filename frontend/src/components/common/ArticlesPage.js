import React from 'react'
import styled from 'styled-components'
import { Articles, FilterButtons, Title } from '../common'

const ArticlesPage = ({
  articles,
  prefix,
  tags,
  selectedTags,
  handleChange,
  resetArticles,
  pageContext,
}) => {
  return (
    <StyledArticlesPage>
      <div className="container">
        <div className="row">
          <div className="col">
            <Title
              title={prefix.charAt(0).toUpperCase() + prefix.slice(1)}
              pageContext={pageContext}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <FilterButtons
              tags={tags}
              selectedTags={selectedTags}
              handleChange={handleChange}
              resetArticles={resetArticles}
            />
          </div>
        </div>
        <Articles articles={articles} prefix={prefix} />
      </div>
    </StyledArticlesPage>
  )
}

const StyledArticlesPage = styled.div`
  padding: 2rem;
`

export { ArticlesPage }
