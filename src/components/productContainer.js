import React from "react"
import ProductFilter from "./productFilter"
import ProductList from "./productList"

const ProductContainer = ({ products }) => {
  return (
    <>
      <ProductFilter products={products}></ProductFilter>
      <ProductList products={products}></ProductList>
    </>
  )
}

export default ProductContainer
