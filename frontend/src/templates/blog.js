import React from "react"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const BlogTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, tags, image, date },
      body,
      tableOfContents: { items },
    },
  } = data

  return (
    <Layout items={items}>
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
      tableOfContents
    }
  }
`

export default BlogTemplate
