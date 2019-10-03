import React from "react"

import LinkUp from "../components/link"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Wrapper from "../components/wrapper"
import Section from "../components/section"
import Title from "../components/title"
import P from "../components/paragraph"
import Grid from "../components/grid"

const Cart = () => (
  <Layout>
    <SEO title="Cart" />
    <Section>
      <Wrapper>
        <Grid className="cartProcess">
          <article className="active">
            <P style={{ margin: 0, letterSpacing: `-0.5px` }}>Shopping Cart</P>
          </article>
          <article>
            <P style={{ margin: 0, letterSpacing: `-0.5px` }}>Check out</P>
          </article>
          <article>
            <P style={{ margin: 0, letterSpacing: `-0.5px` }}>
              Order Completed
            </P>
          </article>
        </Grid>
      </Wrapper>
    </Section>
    <Section>
      <Wrapper>
        <Grid className="cartInfo">
          <Title type="h2" text="Cart" placement="center"></Title>
          <P style={{ margin: 0 }}>Your cart is empty</P>
          <LinkUp
            className="cart"
            type="internal"
            url="/"
            ariaLabel="Go to shop"
          >
            Continue shopping
          </LinkUp>
        </Grid>
      </Wrapper>
    </Section>
  </Layout>
)

export default Cart
