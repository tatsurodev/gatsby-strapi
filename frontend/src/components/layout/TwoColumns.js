import React from 'react'
import { AboutMe, RelatedArticles } from '../common'
import { Toc } from '../blogs'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import {
  Breadcrumb,
  Date,
  Tags,
  Rating,
  Comments,
  Websites,
  EyeCatch,
} from '../../components/common'

// blogはbody, それ以外はdescription
const TwoColumns = ({
  // 全articles用sidebar
  prefix,
  relatedArticles,
  // blogs用sidebar
  tocItems,
  pageContext,
  title,
  url,
  date,
  tags,
  image,
  reviewTitle,
  rating,
  body,
  description,
  websites,
  id,
  location,
}) => {
  const commentId = prefix === 'blogs' ? `blogs_${id}` : id.toLowerCase()
  // console.log('twocolumns id', commentId)
  // console.log('twocolumns title', title)
  // console.log('twocolumns url', `${location.href}`)

  return (
    <StyledTwoColumns>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="sidebar">
              {prefix === 'blogs' && <Toc items={tocItems} />}
              <AboutMe />
              <RelatedArticles articles={relatedArticles} prefix={prefix} />
            </div>
          </div>
          <div className="col-md-9">
            <div className="content">
              <Breadcrumb pageContext={pageContext} crumbLabel={title} />
              <article>
                <h1 className="article-title">{title}</h1>
                <Date className="date" date={date} />
                <Tags className="tags" tags={tags} />
                <div className="eyecatch">
                  {reviewTitle ? (
                    <Rating
                      className="rating"
                      rating={rating}
                      reviewTitle={reviewTitle}
                    >
                      <EyeCatch image={image} url={url} />
                    </Rating>
                  ) : (
                    <EyeCatch image={image} url={url} />
                  )}
                </div>
                {description && <div className="body">{description}</div>}
                {body && (
                  <div className="body">
                    <MDXRenderer>{body}</MDXRenderer>
                  </div>
                )}
                {websites && (
                  <Websites className="websites" websites={websites} />
                )}
              </article>
            </div>
            <Comments id={commentId} title={title} url={location.href} />
          </div>
        </div>
      </div>
    </StyledTwoColumns>
  )
}

const StyledTwoColumns = styled.div`
  font-size: 1.2rem;
  background: var(--bs-light);

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }

  p {
    font-size: 1rem;
    padding: 0 0.5rem;
  }

  .websites {
    margin-top: 2rem;
  }

  .sidebar > div {
    margin: 2rem 0;
  }

  .content {
    margin: 2rem 0;
    padding: 2rem;
    border: 1px solid var(--bs-gray-200);
    border-radius: 10px;
    background: var(--bs-white);

    .date {
      margin: 1rem 0;
    }

    .tags {
      margin: 1rm 0;
    }

    .eyecatch {
      margin: 2rem 0;
    }

    .article-title {
      font-size: 1.6rem;
      font-weight: 500;
    }

    .thumbnail {
      margin: 2rem 0;
      text-align: center;
    }

    .body {
      margin-top: 2rem;
    }
  }
`

export { TwoColumns }
