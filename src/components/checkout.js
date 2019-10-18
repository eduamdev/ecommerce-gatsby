import React from "react"
import P from "./paragraph"
import Grid from "./grid"
import LinkUp from "./link"
import PropTypes from "prop-types"
import { CardElement, injectStripe } from "react-stripe-elements"

const Checkout = ({ total }) => {
  return (
    <>
      {/* <CardElement /> */}
      <Grid className="payment-details">
        <div className="details">
          <P style={{ fontWeight: 500 }}>Please enter your payment details:</P>
          <label className="email-label" htmlFor="email">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="email-input"
            placeholder="name@example.com"
          />
          <label className="creditCard-label" htmlFor="creditCard">
            Credit Card
          </label>
          <span className="creditCard-note">
            Test using this credit card: 4242 4242 4242 4242, and enter any 5
            digits for the zip code
          </span>
          <input name="creditCard" type="text" className="creditCard-input" />
        </div>
        <div className="amount">
          <div className="subtotal">
            <h4>Subtotal</h4>
            <P>${total}</P>
            <h4>Shipping</h4>
            <P>Free</P>
          </div>
          <div className="total">
            <h4>Total</h4>
            <P>${total}</P>
          </div>
          <LinkUp
            type="internal"
            url="/"
            className="pay"
            ariaLabel="Pay with credit card"
          >
            Pay with credit card
          </LinkUp>
        </div>
      </Grid>
    </>
  )
}

Checkout.propTypes = {
  total: PropTypes.number.isRequired,
}

Checkout.defaultProps = {
  total: 0,
}

export default injectStripe(Checkout)
