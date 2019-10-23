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
    const email = document.getElementById("email")

    let { token, error } = await this.props.stripe.createToken({
      name: "User",
    })
    // console.log(token, error)

    if (error) {
      displayError.textContent = error.message
    } else {
      displayError.textContent = ""

      try {
        let response = await fetch("/.netlify/functions/index", {
          method: "POST",
          body: JSON.stringify({
            stripeToken: token.id,
            stripeAmt: this.props.total * 100,
            stripeIdempotency: this.props.idempotencyKey,
            stripeEmail: email.value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })

        console.log(response)

        if (response.ok) console.log("Purchase Complete!")
      } catch (error) {
        console.log(error.message)
        return
      }
    }
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>

    return (
      <>
        <Grid className="payment-details">
          <div className="details">
            <Title
              type="h3"
              className="payment-title"
              text="Payment Information"
            ></Title>
            <fieldset
              style={{
                padding: "2em 1.75em 1.75em",
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
                id="email"
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
              <div
                id="card-errors"
                role="alert"
                style={{
                  color: "tomato",
                  fontWeight: 700,
                  fontSize: "0.85em",
                  paddingTop: "10px",
                }}
              ></div>
              <CardElement
                className="creditCard-input"
                onChange={event => {
                  const displayError = document.getElementById("card-errors")
                  if (event.error) {
                    displayError.textContent = event.error.message
                  } else {
                    displayError.textContent = ""
                  }
                }}
              />
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
