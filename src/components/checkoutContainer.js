import React from "react"
import Checkout from "./checkout"
import OrderSummary from "./orderSummary"
import useImages from "../hooks/useImages"
import { Elements } from "react-stripe-elements"

const CheckoutContainer = ({ cart }) => {
  let images = useImages()
  const total = cart.map(item => item.total).reduce((acc, curr) => acc + curr)

  return (
    <>
      <OrderSummary cart={cart} images={images}></OrderSummary>
      <Elements>
        <Checkout total={total}></Checkout>
      </Elements>
    </>
  )
}

export default CheckoutContainer
