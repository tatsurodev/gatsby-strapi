import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useLocation } from '@reach/router'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { Tags, Date, CommentsCount } from '.'
import { getNoDuplicateTags } from '../../utils'

const Article = ({ article, prefix, className }) => {
  var title, slug, image, date, tags
  // blog時の処理
  if (Object.keys(article).includes('frontmatter')) {
    // 変数宣言を行わすに分割代入する時は、左辺をblockとしてみなされないために()で括る必要あり
    ;({
      frontmatter: { title, slug, image, date, tags },
    } = article)
  } else {
    // review, portfolio共通の処理
    ;({ title, slug, image, date } = article)
    image = image.localFile
    tags = []
    // review時の処理
    if (Object.keys(article).includes('type')) {
      article.tags.map(({ name }) => tags.push(name))
    }
    // portfolio時の処理
    else {
      tags = getNoDuplicateTags(article.websites)
    }
  }

  const location = useLocation()
  // article.idの値は、articleがportfolios, reviewsの時はPortfolios_1, blogsの時はbb33124c-c01b-57be-b483-7e0c1af88436
  // portfolios_1
  // blogs_bb33124c-c01b-57be-b483-7e0c1af88436
  const commentId =
    prefix === 'blogs' ? `blogs_${article.id}` : article.id.toLowerCase()
  // console.log('article id', `${id}`)
  // console.log('article title', `${title}`)
  // console.log('article url', `${location.href}/${slug}`)

  return (
    <StyledArticle className={className}>
      <div className="article">
        <Link to={`/${prefix}/${slug}`}>
          <GatsbyImage
            image={getImage(image)}
            alt={title}
            className="article-image"
          />
          <h3 className="article-title">{title}</h3>
        </Link>
        <div className="article-footer">
          <div className="container">
            <Date date={date} />
            <Tags tags={tags} />
            <CommentsCount
              id={commentId}
              title={title}
              url={`${location.href}/${slug}`}
            />
          </div>
        </div>
      </div>
    </StyledArticle>
  )
}

const StyledArticle = styled.div`
  margin: 1rem 0;

  .article {
    position: relative;
    border: 1px solid var(--light);
    border-radius: 5px;
    background: #f8f9fa;

    .article-title {
      height: 4rem;
      color: var(--gray);
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      font-size: 1.4rem;
      line-height: 1.4;
      margin: 1rem;
    }

    .article-image {
      width: 100%;
      border-radius: 5px 5px 0 0;

      @media (min-width: 768px) {
        height: 12rem;
      }

      @media (min-width: 992px) {
        height: 15rem;
      }
    }

    .article-footer {
      padding-bottom: 1rem;
    }
  }
`

Article.propTypes = {
  article: PropTypes.object.isRequired,
  prefix: PropTypes.string.isRequired,
}

export { Article }
