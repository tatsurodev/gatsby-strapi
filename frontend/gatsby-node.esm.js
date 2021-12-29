import path from 'path'
// commonjsのsyntaxでnamed exportしたmoduleは下記のようにimportできるが、react用に作ったmoduleを流用する時は、es6のsyntaxでexportしているのでcommonjs syntaxのgatsby-nodeには使用できない。よってgatsby-nodeで使用するsyntaxをcommonjsからes6にesmで変更する
// const getNoDuplicateTags = require('./src/utils/portfolios.js').getNoDuplicateTags
import { getNoDuplicateTags } from './src/utils'

export const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      # tags取得
      allStrapiTags {
        distinct(field: slug)
      }
      allMdx {
        distinct(field: frontmatter___tags)
      }

      # portfolios, reviews, blogs取得
      portfolios: allStrapiPortfolios {
        nodes {
          id
          title
          description
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          slug
          date(formatString: "MMMM, YYYY")
          websites {
            title
            github
            url
            tags {
              id
              name
            }
          }
        }
      }

      reviews: allStrapiReviews {
        nodes {
          id
          type
          title
          author
          url
          review
          rating
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          slug
          date(formatString: "MMMM, YYYY")
          websites {
            id
            title
            description
            github
            url
          }
          tags {
            id
            name
            slug
          }
        }
      }

      blogs: allMdx {
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
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)

  const duplicatedTags = [
    ...result.data.allStrapiTags.distinct,
    ...result.data.allMdx.distinct,
  ]
  const tags = [...new Set(duplicatedTags)]

  // let portfolios, reviews, blogs
  tags.forEach(tag => {
    const portfolios = result.data.portfolios.nodes.filter(portfolio => {
      const tags = getNoDuplicateTags(portfolio.websites)
      return tags.includes(tag)
    })
    const reviews = result.data.reviews.nodes.filter(review => {
      return review.tags.filter(t => t.name === tag).length !== 0
    })
    const blogs = result.data.blogs.nodes.filter(blog => {
      // console.log('tag', tag, 'blogtags', blog.frontmatter.tags)
      return (
        blog.frontmatter.tags.filter(t => t.toLowerCase() === tag.toLowerCase())
          .length !== 0
      )
    })
    // console.log(
    //   'tag',
    //   tag,
    //   'portfolios',
    //   portfolios,
    //   'reviews',
    //   reviews,
    //   'blogs',
    //   blogs
    // )
    createPage({
      path: `/tags/${tag}`,
      component: path.resolve(`src/templates/tags-template.js`),
      context: {
        tag,
        portfolios,
        reviews,
        blogs,
      },
    })
  })
}
