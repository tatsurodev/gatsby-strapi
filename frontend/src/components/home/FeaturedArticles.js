import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import { Title, Article } from "../common"

const FeaturedArticles = ({ articles, className }) => {
  const firstArticleId = articles[0].id
  let prefix, title
  if (firstArticleId.includes("Portfolios")) {
    prefix = "portfolios"
    title = "Featured Portfolios"
  } else if (firstArticleId.includes("Reviews")) {
    prefix = "reviews"
    title = "Featured Reviews"
  } else {
    prefix = "blogs"
    title = "Recent Blogs"
  }
  const { pathname } = useLocation()

  return (
    <StyledFeaturedArticles className={className}>
      <div className="heading">
        <Title title={title} />
        {pathname === "/" && (
          <Link
            to={`/${prefix}`}
            className={`btn ${
              className === "info" ? "btn-outline-light" : "btn-info"
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

const StyledFeaturedArticles = styled.div`
  padding: 1rem 0;
  position: relative;
  background: ${p => (p.className === "info" ? "var(--info)" : "white")};
  display: grid;
  grid-template-rows: 50% 50%;
  grid-template-columns: 30% 35% 35%;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 30%;
    right: 0;
    bottom: 0;
    background: ${p => (p.className === "info" ? "white" : "var(--info)")};
  }

  .heading {
    color: ${p => (p.className === "info" ? "white" : "var(--gray)")};
    text-align: center;
    position: absolute;
    top: 50%;
    left: 15%;
    transform: translateY(-50%) translateX(-50%);

    a {
      font-size: 1.5vw;
      text-align: center;
    }
  }

  .articles {
    grid-row: 1/3;
    grid-column: 2/4;
  }
`

export { FeaturedArticles }
