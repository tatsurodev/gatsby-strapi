import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const RelatedArticles = ({ articles, prefix }) => {
  return (
    <StyledRelatedArticles>
      <h4 className="heading">{`Recent ${prefix}`}</h4>
      {articles.map((article, index) => {
        var title, slug, image, date
        // blog時の処理
        if (Object.keys(article).includes('frontmatter')) {
          // 変数宣言を行わすに分割代入する時は、左辺をblockとしてみなされないために()で括る必要あり
          ;({
            frontmatter: { title, slug, image, date },
          } = article)
        } else {
          // review, portfolio共通の処理
          ;({ title, slug, image, date } = article)
          image = image.localFile
        }
        return (
          <div key={index} className="article">
            <Link to={`/${prefix}/${slug}`}>
              <GatsbyImage
                image={getImage(image)}
                alt={title}
                className="article-image"
              />
              <span className="article-date">{date}</span>
              <h4 className="article-title">{title}</h4>
            </Link>
          </div>
        )
      })}
    </StyledRelatedArticles>
  )
}

const StyledRelatedArticles = styled.div`
  padding: 1rem;
  background: var(--bs-white);
  border: 1px solid var(--bs-gray-200);
  border-radius: 10px;

  .heading {
    margin-bottom: 1rem;
    text-transform: capitalize;
  }

  .article {
    margin-bottom: 1rem;
  }

  .article-date {
    font-size: 0.8rem;
    margin: 0.2rem;
  }
  .article-title {
    margin: 0 0.2rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  .article-image {
    border-radius: 0.3rem;
  }
`

export { RelatedArticles }
