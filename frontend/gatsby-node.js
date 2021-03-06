const path = require("path")

// 動的にpage作成
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      portfolios: allStrapiPortfolios {
        nodes {
          slug
        }
      }
      reviews: allStrapiReviews {
        nodes {
          slug
        }
      }
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  result.data.portfolios.nodes.forEach(portfolio => {
    createPage({
      path: `/portfolios/${portfolio.slug}`,
      component: path.resolve(`src/templates/portfolio.js`),
      context: {
        slug: portfolio.slug,
      },
    })
  })
  result.data.reviews.nodes.forEach(review => {
    createPage({
      path: `/reviews/${review.slug}`,
      component: path.resolve(`src/templates/review.js`),
      context: {
        slug: review.slug,
      },
    })
  })
  result.data.allMdx.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `/blogs/${slug}`,
      component: path.resolve(`src/templates/blog.js`),
      context: {
        slug,
      },
    })
  })
}
