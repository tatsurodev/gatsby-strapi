import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"

const BlogsPage = ({ data }) => {
  const {
    allMdx: { nodes: blogs },
  } = data

  return (
    <Layout>
      <section>
        <Blogs blogs={blogs} title="all blogs" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        excerpt
        frontmatter {
          title
          author
          tags
          date(formatString: "MMMM, Do, YYYY")
          slug
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default BlogsPage
