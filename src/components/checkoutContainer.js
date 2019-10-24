import React from "react"
import Checkout from "./checkout"
import OrderSummary from "./orderSummary"
import useImages from "../hooks/useImages"
import { Elements } from "react-stripe-elements"
import Grid from "./grid"

const CheckoutContainer = ({ cart }) => {
  let images = useImages()
  const total = cart.map(item => item.total).reduce((acc, curr) => acc + curr)

  return (
    <>
      <Grid className="checkout">
        <div className="summary">
          <OrderSummary
            cart={cart}
            images={images}
            total={total}
          ></OrderSummary>
        </div>
        <div className="payment">
          <Elements>
            <Checkout total={total}></Checkout>
          </Elements>
        </div>
      </Grid>
    </>
  )
}

export default CheckoutContainer
