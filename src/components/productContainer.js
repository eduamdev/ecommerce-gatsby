import React, { useContext } from "react"
import ProductFilter from "./productFilter"
import ProductList from "./productList"
import { GlobalStateContext } from "../context/GlobalContextProvider"

const ProductContainer = () => {
  const state = useContext(GlobalStateContext)

  return (
    <>
      <ProductFilter products={state.products}></ProductFilter>
      <ProductList products={state.products}></ProductList>
    </>
  )
}

export default ProductContainer
