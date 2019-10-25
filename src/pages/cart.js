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
import { Checkmark } from "../components/svg"
import styled from "styled-components"
import { FoldingCube } from "../components/loading"

const Icon = styled.span`
  width: 8em;
  margin: 0.75em auto 1.75em;

  & svg {
    background: #d4efd7;
    border-radius: 100%;
  }
`

const Cart = () => {
  const state = useContext(GlobalStateContext)
  const { cart, isCartEmpty, isPurchaseComplete } = state

  if (state.isLoading)
    return (
      <Layout>
        <SEO title="Cart" />
        <Section
          style={{ padding: `2em 0`, background: "rgba(238, 238, 248, 0.3)" }}
        >
          <Wrapper>
            <Grid>
              <Title type="h2" text="Cart" placement="center"></Title>
              <P>Processing your order</P>
              <FoldingCube />
            </Grid>
          </Wrapper>
        </Section>
      </Layout>
    )

  return (
    <Layout>
      <SEO title="Cart" />
      <Section
        style={{ padding: `2em 0`, background: "rgba(238, 238, 248, 0.3)" }}
      >
        <Wrapper>
          {isCartEmpty ? (
            isPurchaseComplete ? (
              <>
                <Grid className="purchaseSuccess">
                  <Icon>{Checkmark}</Icon>
                  <Title type="h3" text="Success!" placement="center"></Title>
                  <P style={{ margin: 0, textAlign: "center" }}>
                    Thank you for your purchase. You'll be receiving your item
                    in 2-5 business days.
                  </P>
                </Grid>
                <Grid>
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
              <>
                <Grid className="cartInfo">
                  <Title type="h2" text="Cart" placement="center"></Title>
                  <P style={{ margin: 0 }}>Your cart is empty</P>
                </Grid>
                <Grid>
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
            )
          ) : (
            <CheckoutContainer cart={cart}></CheckoutContainer>
          )}
        </Wrapper>
      </Section>
    </Layout>
  )
}

export default Cart
