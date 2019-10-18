import React from "react"
import Img from "gatsby-image"
import P from "./paragraph"
import PropTypes from "prop-types"

const OrderSummary = ({ cart, images }) => {
  return (
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
          {cart &&
            cart.map((item, index) => {
              const image = images[item.image]

              return (
                <tr key={index}>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>
                    <Img
                      style={{ width: 60 }}
                      fluid={image.childImageSharp.fluid}
                      alt={item.name}
                    ></Img>
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
    </>
  )
}

OrderSummary.propTypes = {
  cart: PropTypes.array.isRequired,
  images: PropTypes.object.isRequired,
}

OrderSummary.defaultProps = {
  cart: [],
  images: {},
}

export default OrderSummary
