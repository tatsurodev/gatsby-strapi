import React from 'react'
import styled from 'styled-components'
import { Title, Articles } from '../components/common'
import useFilter from '../hooks/useFilter'

const TagsTemplate = ({ pageContext }) => {
  const { tag, portfolios, reviews, blogs } = pageContext
  const { articles: filteredPortfolios } = useFilter(portfolios)
  const { articles: filteredReviews } = useFilter(reviews)
  const { articles: filteredBlogs } = useFilter(blogs)

  return (
    <StyledTagsTemplate>
      <div className="container">
        <div className="row">
          <div className="col">
            <Title title={tag} pageContext={pageContext} />
          </div>
        </div>
        <Articles articles={filteredPortfolios} prefix="portfolios" />
        <Articles articles={filteredReviews} prefix="reviews" />
        <Articles articles={filteredBlogs} prefix="blogs" />
      </div>
    </StyledTagsTemplate>
  )
}

const StyledTagsTemplate = styled.div`
  padding: 2rem;
`

export default TagsTemplate
