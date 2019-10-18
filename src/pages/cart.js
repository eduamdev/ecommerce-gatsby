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
import Flex from "../components/flex"
import CheckoutContainer from "../components/checkoutContainer"

const Cart = () => {
  const state = useContext(GlobalStateContext)
  const { cart, isCartEmpty } = state

  return (
    <Layout>
      <SEO title="Cart" />
      <Section className="cartProcess">
        <Wrapper className="cartProcess">
          <Grid className="cartProcess">
            <Flex
              className={isCartEmpty ? "cartProcess active" : "cartProcess"}
            >
              <span className="step">1</span>
              <P className="process">Shopping</P>
            </Flex>
            <Flex
              className={isCartEmpty ? "cartProcess" : "cartProcess active"}
            >
              <span className="step">2</span>
              <P className="process">Check out</P>
            </Flex>
            <Flex className="cartProcess">
              <span className="step">3</span>
              <P className="process">Order Completed</P>
            </Flex>
          </Grid>
        </Wrapper>
      </Section>
      <Section style={{ padding: `1.5em 0 3em 0` }}>
        <Wrapper>
          <Title type="h2" text="Cart" placement="center"></Title>
          {isCartEmpty ? (
            <Grid className="cartInfo">
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
          ) : (
            <CheckoutContainer cart={cart}></CheckoutContainer>
          )}
        </Wrapper>
      </Section>
    </Layout>
  )
}

export default Cart
