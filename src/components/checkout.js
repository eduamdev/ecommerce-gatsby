import React from "react"
import Grid from "./grid"
import { CardElement, injectStripe } from "react-stripe-elements"
import styled from "styled-components"
import Title from "./title"

const Button = styled.button`
  &.pay {
    display: inline-block;
    cursor: pointer;
    background: rgb(187, 120, 120);
    color: #fff;
    padding: 0.75em 1.2em;
    border-radius: 2px;
    width: 100%;
    margin: 2em auto 0 auto;
    text-align: center;
    border: none;

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
            <Title
              type="h3"
              className="payment-title"
              text="Payment Information"
            ></Title>
            <fieldset
              style={{
                padding: "2em 1.75em",
                border: "1px solid #ddd",
                margin: 0,
              }}
            >
              <legend style={{ padding: "0 0.5em" }}>
                Please enter your payment details below
              </legend>
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
                Test using this credit card: 4242 4242 4242 4242, and enter any
                5 digits for the zip code
              </span>
              <CardElement className="creditCard-input" />
              <Button className="pay" onClick={this.submit}>
                Pay with credit card
              </Button>
            </fieldset>
          </div>
        </Grid>
      </>
    )
  }
}

export default injectStripe(Checkout)
