import React, { useContext } from "react"
import LinkUp from "../components/link"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Wrapper from "../components/wrapper"
import Section from "../components/section"
import Title from "../components/title"
import P from "../components/paragraph"
import Grid from "../components/grid"
import Flex from "../components/flex"
import { GlobalStateContext } from "../context/GlobalContextProvider"

const Cart = () => {
  const state = useContext(GlobalStateContext)
  let total = 0

  return (
    <Layout>
      <SEO title="Cart" />
      <Section className="cartProcess">
        <Wrapper className="cartProcess">
          <Grid className="cartProcess">
            <Flex className="cartProcess">
              <span className="step">1</span>
              <P className="process">Shopping</P>
            </Flex>
            <Flex className="cartProcess active">
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
      <Section style={{ padding: `1.5em 0` }}>
        <Wrapper>
          <Title type="h2" text="Cart" placement="center"></Title>
          {state.isCartEmpty ? (
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
            <>
              <table className="checkout">
                <thead>
                  <tr style={{ fontSize: `0.95em` }}>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {state.cart &&
                    state.cart.map((item, index) => {
                      total += item.total

                      return (
                        <tr key={index}>
                          <td style={{ paddingTop: 0, paddingBottom: 0 }}>
                            <img
                              style={{ width: `60px` }}
                              src="https://clarks.scene7.com/is/image/Pangaea2Build/26135409_W_1"
                              alt={item.name}
                            />
                            <h4
                              style={{
                                marginBottom: `15px`,
                                textAlign: `left`,
                                fontSize: `0.92em`,
                                letterSpacing: `-.5px`,
                              }}
                            >
                              {item.name}
                            </h4>
                          </td>
                          <td>
                            <P style={{ margin: 0 }}>${item.price}</P>
                          </td>
                          <td>
                            <P style={{ margin: 0 }}>{item.quantity}</P>
                          </td>
                          <td>
                            <P style={{ margin: 0 }}>${item.total}</P>
                          </td>
                        </tr>
                      )
                    })}
                </tbody>
              </table>
              <Grid className="payment-details">
                <div className="details">
                  <P style={{ fontWeight: 500 }}>
                    Please enter your payment details:
                  </P>
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
                    Test using this credit card: 4242 4242 4242 4242, and enter
                    any 5 digits for the zip code
                  </span>
                  <input
                    name="creditCard"
                    type="text"
                    className="creditCard-input"
                  />
                </div>
                <div className="amount">
                  <div className="subtotal">
                    <h4>Subtotal</h4>
                    <P>${total}</P>
                    <h4>Shipping</h4>
                    <P>Free</P>
                  </div>
                  <div className="total">
                    <h4>Total</h4>
                    <P>${total}</P>
                  </div>
                  <LinkUp
                    type="internal"
                    url="/"
                    className="pay"
                    ariaLabel="Pay with credit card"
                  >
                    Pay with credit card
                  </LinkUp>
                </div>
              </Grid>
            </>
          )}
        </Wrapper>
      </Section>
    </Layout>
  )
}

export default Cart
