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
}
