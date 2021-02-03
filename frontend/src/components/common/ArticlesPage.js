import React from "react"
import styled from "styled-components"
import Layout from "../Layout"
import { Article, FilterButtons } from "../common"

const ArticlesPage = ({
  nestedInstances,
  prefix,
  tags,
  selectedTags,
  handleChange,
  resetInstances,
}) => {
  return (
    <Layout>
      <StyledArticlesPage>
        <div className="container">
          <div className="row">
            <h1 className="leading col-12">{prefix}</h1>
            <FilterButtons
              className="col-12"
              tags={tags}
              selectedTags={selectedTags}
              handleChange={handleChange}
              resetInstances={resetInstances}
            />
          </div>
          {nestedInstances.map(rowJsx => (
            <div className="row">
              {rowJsx.map(instance => (
                <Article
                  key={instance.id}
                  article={instance}
                  prefix={prefix}
                  className="col-md-4"
                />
              ))}
            </div>
          ))}
        </div>
      </StyledArticlesPage>
    </Layout>
  )
}

const StyledArticlesPage = styled.div`
  padding: 2rem;

  .leading {
    font-size: 3vw;
    text-align: center;
  }

  .sub-leading {
    font-size: 1.5vw;
  }
`

export { ArticlesPage }
