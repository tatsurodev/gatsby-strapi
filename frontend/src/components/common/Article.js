import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { Tags, Date } from "."
import { getNoDuplicateTags } from "../../utils"

const Article = ({ article, prefix, className }) => {
  // blog時の処理
  if (Object.keys(article).includes("frontmatter")) {
    var {
      frontmatter: { title, slug, image, date, tags },
    } = article
  } else {
    // review, portfolio共通の処理
    var { title, slug, image, date } = article
    var tags = []
    // review時の処理
    if (Object.keys(article).includes("type")) {
      article.tags.map(({ name }) => tags.push(name))
    }
    // portfolio時の処理
    else {
      tags = getNoDuplicateTags(article.websites)
    }
  }

  return (
    <StyledArticle className={className}>
      <div className="article">
        <Link to={`/${prefix}/${slug}`}>
          <Image
            fluid={image.childImageSharp.fluid}
            className="article-image"
          />
          <h3 className="article-title">{title}</h3>
        </Link>
        <div className="article-footer">
          <div className="container">
            <Tags tags={tags} />
            <Date date={date} />
          </div>
        </div>
      </div>
    </StyledArticle>
  )
}

const StyledArticle = styled.div`
  margin: 1rem 0;

  .article {
    border: 1px solid var(--light);
    border-radius: 5px;
    background: #f8f9fa;

    .article-title {
      height: 3rem;
      color: var(--gray);
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      font-size: 1.4rem;
      margin: 1rem;
    }

    .article-image {
      height: 15rem;
      border-radius: 5px 5px 0 0;
    }

    .article-footer {
      margin: 1rem 0;
    }
  }
`

Article.propTypes = {
  article: PropTypes.object.isRequired,
  prefix: PropTypes.string.isRequired,
}

export { Article }
