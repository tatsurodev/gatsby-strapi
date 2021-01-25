import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const BlogTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, tags, image, date },
      body,
    },
  } = data

  return (
    <Layout>
      <article>
        {image && <Image fluid={image.childImageSharp.fluid} />}
        <div>
          <div>
            {tags.map(tag => (
              <button className="btn btn-info">{tag}</button>
            ))}
          </div>
          <h2>{title}</h2>
          <p>{date}</p>
        </div>
        <MDXRenderer>{body}</MDXRenderer>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query GetBlog($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        tags
        date(formatString: "MMM Do, YYYY")
        slug
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`

export default BlogTemplate
