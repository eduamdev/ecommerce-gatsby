/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const products = require("./src/content/products.json")
const men = products.filter(product => product.category === "men")
const women = products.filter(product => product.category === "women")

exports.createPages = ({ actions: { createPage } }) => {
  products.forEach(product => {
    createPage({
      path: `/product/${product.slug}/`,
      component: require.resolve("./src/templates/product.js"),
      context: {
        slug: product.slug,
        name: product.name,
        price: product.price,
        description: product.description,
        stars: product.stars,
        details: product.details,
        reviews: product.reviews,
      },
    })
  }),
    createPage({
      path: `/men`,
      component: require.resolve("./src/templates/products.js"),
      context: {
        products: men,
      },
    }),
    createPage({
      path: `/women`,
      component: require.resolve("./src/templates/products.js"),
      context: {
        products: women,
      },
    })
}
