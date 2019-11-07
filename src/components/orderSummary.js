import React from "react"
import Img from "gatsby-image"
import P from "./paragraph"
import PropTypes from "prop-types"
import Heading from "./heading"
import Grid from "./grid"

const OrderSummary = ({ cart, images, total }) => {
  return (
    <>
      <Heading rank={2} style={{ marginBottom: "2em", fontWeight: 600 }}>
        Order Summary
      </Heading>
      {cart &&
        cart.map((item, index) => {
          const image = images[item.image]

          return (
            <article key={index}>
              <Grid className="order-summary">
                <Img
                  className="order-summary__img"
                  fluid={image.childImageSharp.fluid}
                  alt={item.name}
                ></Img>
                <div className="order-summary__info">
                  <Heading rank={4}>{item.name}</Heading>
                  <P>{item.description}</P>
                </div>
                <div className="order-summary__price">
                  <P style={{ margin: 0 }}>
                    <span>
                      {item.quantity} x ${item.price}
                    </span>
                  </P>
                </div>
                <div className="order-summary__total">
                  <P style={{ margin: 0 }}>
                    <span>${item.total}</span>
                  </P>
                </div>
              </Grid>
            </article>
          )
        })}
      <Grid className="order-amount">
        <Heading rank={4} className="left">
          Subtotal
        </Heading>
        <span className="subtotal right">${total}</span>
        <Heading rank={4} className="left">
          Shipping
        </Heading>
        <span className="shipping right">Free</span>
        <Heading rank={2} className="total left">
          Total
        </Heading>
        <Heading
          rank={2}
          className="total right"
          style={{ textAlign: `right` }}
        >
          ${total}
        </Heading>
      </Grid>
    </>
  )
}

OrderSummary.propTypes = {
  cart: PropTypes.array.isRequired,
  images: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
}

OrderSummary.defaultProps = {
  cart: [],
  images: {},
  total: 0,
}

export default OrderSummary
