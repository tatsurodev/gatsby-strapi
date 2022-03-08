import React from 'react'
import { AboutMe, RelatedArticles } from '../common'
import { Toc, mapTagsToComponents } from '../blogs'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import ReactMarkdown from 'react-markdown'
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
            <StyledSidebar>
              {prefix === 'blogs' && <Toc items={tocItems} />}
              <AboutMe />
              <RelatedArticles articles={relatedArticles} prefix={prefix} />
            </StyledSidebar>
          </div>
          <div className="col-md-9">
            <StyledContent>
              <Breadcrumb pageContext={pageContext} crumbLabel={title} />
              <StyledArticle>
                <h1>{title}</h1>
                <Date date={date} />
                <Tags tags={tags} />
                <div>
                  {reviewTitle ? (
                    <Rating rating={rating} reviewTitle={reviewTitle}>
                      <EyeCatch image={image} url={url} />
                    </Rating>
                  ) : (
                    <EyeCatch image={image} url={url} />
                  )}
                </div>
                <StyledBody>
                  {description && (
                    <ReactMarkdown components={mapTagsToComponents}>
                      {description}
                    </ReactMarkdown>
                  )}
                  {body && <MDXRenderer>{body}</MDXRenderer>}
                </StyledBody>
                {websites && <Websites websites={websites} />}
              </StyledArticle>
            </StyledContent>
            <Comments id={commentId} title={title} url={location.href} />
          </div>
        </div>
      </div>
    </StyledTwoColumns>
  )
}

const StyledTwoColumns = styled.div`
  font-size: 1.2rem;
  background: ${({ theme }) => theme.primaryBg};
`

const StyledSidebar = styled.div`
  > div {
    margin: 2rem 0;
  }
`

const StyledContent = styled.div`
  margin: 2rem 0;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 10px;
  background: ${({ theme }) => theme.primaryBg};
`

const StyledArticle = styled.article`
  > h1 {
    font-size: 1.6rem;
    font-weight: 500;
  }

  > div {
    margin: 1rem 0;
  }
`

const StyledBody = styled.div`
  > h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 1.2rem;
    margin: 1rem 0;
  }

  > p {
    font-size: 1rem;
    padding: 0 0.5rem;
  }
`

export { TwoColumns }
