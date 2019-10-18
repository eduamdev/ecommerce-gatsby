import React, { useState, useEffect } from "react"
import GlobalContextProvider from "./GlobalContextProvider"
import { StripeProvider } from "react-stripe-elements"

const StripeWrapper = ({ children }) => {
  const [stripe, setStripe] = useState(null)

  useEffect(() => {
    // for SSR
    if (typeof window == "undefined") return

    // for browser
    if (window.Stripe) {
      setStripe(window.Stripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY))
    } else {
      const stripeScript = document.querySelector("#stripe-js")
      stripeScript.onload = () => {
        setStripe(window.Stripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY))
      }
    }
  }, []) // <-- passing in an empty array since I only want to run this hook once

  return (
    <StripeProvider stripe={stripe}>
      <GlobalContextProvider>{children}</GlobalContextProvider>
    </StripeProvider>
  )
}

export default StripeWrapper
