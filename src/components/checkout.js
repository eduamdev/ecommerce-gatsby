import React, { useContext } from "react"
import { GlobalDispatchContext } from "../context/GlobalContextProvider"
import Grid from "./grid"
import { CardElement, injectStripe } from "react-stripe-elements"
import styled from "styled-components"
import Title from "./title"
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

const Spinner = styled.div`
  margin: 0.5em auto 0;
  width: 70px;
  text-align: center;
  visibility: hidden;

  &.active {
    visibility: visible;
  }

  & > div {
    width: 8px;
    height: 8px;
    background-color: #333;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;

    &:not(:last-child) {
      margin-right: 5px;
    }
  }

  & .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  & .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`

const Checkout = ({ total, stripe }) => {
  const dispatch = useContext(GlobalDispatchContext)
  let loading = false

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
        loading = true
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

        // console.log(response)
        loading = false

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
          <Title
            type="h3"
            className="payment-title"
            text="Payment Information"
          ></Title>
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
          <div className="loading">
            <Spinner className={loading ? "active" : ""}>
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
            </Spinner>
          </div>
        </div>
      </Grid>
    </>
  )
}

export default injectStripe(Checkout)
