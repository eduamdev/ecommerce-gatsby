import React, { useContext } from "react"
import { GlobalDispatchContext } from "../context/GlobalContextProvider"
import Grid from "./grid"
import { CardElement, injectStripe } from "react-stripe-elements"
import styled from "styled-components"
import Heading from "./heading"
import P from "./paragraph"
import uuid from "uuid"

const Button = styled.button`
  &.pay {
    display: inline-block;
    cursor: pointer;
    background: #3e2723;
    color: #fff;
    padding: 0.75em 1.2em;
    border-radius: 2px;
    width: 100%;
    margin: 2em auto 0 auto;
    text-align: center;
    border: none;

    &:hover {
      /* background: rgb(146, 93, 93); */
      background: #1b0000;
    }
  }
`

const Checkout = ({ total, stripe }) => {
  const dispatch = useContext(GlobalDispatchContext)

  async function submit(ev) {
    ev.preventDefault()

    const displayError = document.getElementById("card-errors")
    const email = document.getElementById("email")

    let { token, error } = await stripe.createToken({
      name: "User",
    })

    if (error) {
      displayError.textContent = error.message
    } else {
      displayError.textContent = ""

      try {
        dispatch({ type: "TRIGGER_LOADING" })
        let response = await fetch("/.netlify/functions/index", {
          method: "POST",
          body: JSON.stringify({
            stripeToken: token.id,
            stripeAmt: total * 100,
            stripeIdempotency: uuid.v1(),
            stripeEmail: email.value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })

        // Delay to see the loading screen a little longer
        setTimeout(function() {
          dispatch({ type: "STOP_LOADING" })
        }, 1500)

        // console.log(response)
        if (response.ok) {
          dispatch({ type: "PURCHASE_SUCCESSFUL" })
        } else {
          console.log("Something went wrong :/")
        }
      } catch (error) {
        console.log(error.message)
        return
      }
    }
  }

  return (
    <>
      <Grid className="payment-details">
        <div className="details">
          <Heading rank={2} style={{ marginBottom: "2em", fontWeight: 600 }}>
            Payment Information
          </Heading>
          <P>Please enter your payment details below</P>
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
          <div id="card-errors" role="alert" className="card-errors"></div>
          <Button className="pay" onClick={submit}>
            Pay with credit card
          </Button>
        </div>
      </Grid>
    </>
  )
}

export default injectStripe(Checkout)
