/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const products = require("./src/content/products.json")

exports.createPages = ({ actions: { createPage } }) => {
  products.forEach(product => {
    createPage({
      path: `/product/${product.slug}/`,
      component: require.resolve("./src/templates/product.js"),
      context: {
        name: product.name,
        price: product.price,
        description: product.description,
        stars: product.stars,
        details: product.details,
        reviews: product.reviews,
        image: product.image,
      },
    })
  })
}
