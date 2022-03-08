import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const RelatedArticles = ({ articles, prefix }) => {
  return (
    <StyledRelatedArticles>
      <h4>{`Recent ${prefix}`}</h4>
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
          <StyledSidebarArticle key={index}>
            <StyledLink to={`/${prefix}/${slug}`}>
              <StyledGatsbyImage image={getImage(image)} alt={title} />
              <span>{date}</span>
              <h4>{title}</h4>
            </StyledLink>
          </StyledSidebarArticle>
        )
      })}
    </StyledRelatedArticles>
  )
}

const StyledRelatedArticles = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.primaryBg};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 10px;

  > h4 {
    margin-bottom: 1rem;
    text-transform: capitalize;
  }
`

const StyledSidebarArticle = styled.div`
  margin-bottom: 1rem;
`

const StyledLink = styled(Link)`
  display: block;

  &:hover {
    opacity: 0.8;
  }

  > span {
    color: ${({ theme }) => theme.text};
    font-size: 0.8rem;
    margin: 0.2rem;
  }

  > h4 {
    margin: 0 0.2rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
`

const StyledGatsbyImage = styled(GatsbyImage)`
  border-radius: 0.3rem;
`

export { RelatedArticles }
