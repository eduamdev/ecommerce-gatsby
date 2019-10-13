import React from "react"
import ProductFilter from "./productFilter"
import ProductList from "./productList"
import useProductsState from "../hooks/useProductsState"

const ProductContainer = ({ products }) => {
  const { allProducts, filteredProducts, filterByPrice } = useProductsState(
    products
  )

  return (
    <>
      <ProductFilter
        products={allProducts}
        filterByPrice={filterByPrice}
      ></ProductFilter>
      <ProductList products={filteredProducts}></ProductList>
    </>
  )
}

export default ProductContainer
