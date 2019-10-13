import { useState } from "react"

export default initialValue => {
  const [allProducts] = useState(initialValue)
  const [filteredProducts, filtering] = useState(allProducts)

  return {
    allProducts,
    filteredProducts,
    filterByPrice: price => {
      filtering(allProducts.filter(product => parseInt(product.price) <= price))
    },
  }
}
