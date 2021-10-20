import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { TwoColumns } from '../../components/layout'

const BlogTemplate = ({ data, location, pageContext }) => {
  const {
    mdx: {
      id,
      frontmatter: { title, tags, image, date },
      body,
      tableOfContents: { items },
    },
  } = data
  const articles = data.recentBlogs.nodes

  return (
    <StyledBlog>
      <TwoColumns
        prefix="blogs"
        relatedArticles={articles}
        tocItems={items}
        pageContext={pageContext}
        title={title}
        date={date}
        tags={tags}
        image={image}
        body={body}
        id={id}
        location={location}
      />
    </StyledBlog>
  )
}

const StyledBlog = styled.div``

export const query = graphql`
  query GetBlog($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      id
      frontmatter {
        title
        tags
        date(formatString: "MMM Do, YYYY")
        slug
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
      tableOfContents
    }

    recentBlogs: allMdx(
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          slug
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default BlogTemplate
