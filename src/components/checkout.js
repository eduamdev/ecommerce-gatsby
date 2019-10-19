import React from "react"
import P from "./paragraph"
import Grid from "./grid"
import PropTypes from "prop-types"
import { CardElement, injectStripe } from "react-stripe-elements"
import styled from "styled-components"
import { viewport } from "./breakpoints"

const Button = styled.button`
  &.pay {
    display: inline-block;
    cursor: pointer;
    background: rgb(187, 120, 120);
    color: #fff;
    padding: 0.75em 1.2em;
    border-radius: 2px;
    width: 100%;
    margin: 1em auto 0 auto;
    text-align: center;

    @media ${viewport[7]} {
      width: 80%;
    }

    @media ${viewport[12]} {
      width: 60%;
    }

    &:hover {
      background: rgb(146, 93, 93);
    }
  }
`

class Checkout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { complete: false }
    this.submit = this.submit.bind(this)
  }

  async submit(ev) {
    ev.preventDefault()

    const displayError = document.getElementById("card-errors")

    let { token, error } = await this.props.stripe.createToken({
      name: "Name",
    })
    // console.log(token, error)

    if (error) {
      displayError.textContent = error.message
    } else {
      displayError.textContent = ""
      let response = await fetch("/charge", {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: token.id,
      })

      if (response.ok) console.log("Purchase Complete!")
    }
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>

    return (
      <>
        <div id="card-errors" role="alert"></div>
        <Grid className="payment-details">
          <div className="details">
            <P style={{ fontWeight: 500 }}>
              Please enter your payment details:
            </P>
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
            <CardElement className="creditCard-input" />
          </div>
          <div className="amount">
            <div className="subtotal">
              <h4>Subtotal</h4>
              <P>${this.props.total}</P>
              <h4>Shipping</h4>
              <P>Free</P>
            </div>
            <div className="total">
              <h4>Total</h4>
              <P>${this.props.total}</P>
            </div>
            <Button className="pay" onClick={this.submit}>
              Pay with credit card
            </Button>
          </div>
        </Grid>
      </>
    )
  }
}

Checkout.propTypes = {
  total: PropTypes.number.isRequired,
}

Checkout.defaultProps = {
  total: 0,
}

export default injectStripe(Checkout)
