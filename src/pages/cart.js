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
    <Section className="cartProcess">
      <Wrapper className="cartProcess">
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
        <Title type="h2" text="Cart" placement="center"></Title>
        <Grid className="cartInfo">
          <P style={{ margin: 0 }}>Your cart is empty</P>
          <LinkUp
            className="cart"
            type="internal"
            url="/products"
            ariaLabel="Go to shop"
          >
            Continue shopping
          </LinkUp>
        </Grid>
        <table className="checkout">
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              <img
                style={{ float: `left`, width: `70px`, marginRight: `25px` }}
                src="https://clarks.scene7.com/is/image/Pangaea2Build/26135409_W_1"
                alt=""
              />
              <h4 style={{ paddingTop: `30px`, textAlign: `left` }}>
                Lorem, ipsum dolor.
              </h4>
            </td>
            <td>$172</td>
            <td>2</td>
            <td>$344</td>
          </tr>
        </table>
        <Grid className="payment-details">
          <div className="details">
            <P>Please enter your payment details:</P>
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
            <input name="creditCard" type="text" className="creditCard-input" />
          </div>
          <div className="amount">
            <div className="subtotal">
              <h4>Subtotal</h4>
              <P>$172</P>
              <h4>Shipping</h4>
              <P>Free</P>
            </div>
            <div className="total">
              <h4>Total</h4>
              <P>$344</P>
            </div>
          </div>
        </Grid>
      </Wrapper>
    </Section>
  </Layout>
)

export default Cart
