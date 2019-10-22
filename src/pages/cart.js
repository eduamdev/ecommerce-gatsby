import React, { useContext } from "react"
import { GlobalStateContext } from "../context/GlobalContextProvider"
import LinkUp from "../components/link"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Wrapper from "../components/wrapper"
import Section from "../components/section"
import Title from "../components/title"
import P from "../components/paragraph"
import Grid from "../components/grid"
import CheckoutContainer from "../components/checkoutContainer"

const Cart = () => {
  const state = useContext(GlobalStateContext)
  const { cart, isCartEmpty } = state

  return (
    <Layout>
      <SEO title="Cart" />
      <Section style={{ padding: `2em 0` }}>
        <Wrapper className="cart">
          {isCartEmpty ? (
            <>
              <Grid className="cartInfo">
                <Title type="h2" text="Cart" placement="center"></Title>
                <P style={{ margin: 0 }}>Your cart is empty</P>
                <LinkUp
                  className="cart"
                  type="internal"
                  url="/women"
                  ariaLabel="Go to shop"
                >
                  Continue shopping
                </LinkUp>
              </Grid>
            </>
          ) : (
            <CheckoutContainer cart={cart}></CheckoutContainer>
          )}
        </Wrapper>
      </Section>
    </Layout>
  )
}

export default Cart
