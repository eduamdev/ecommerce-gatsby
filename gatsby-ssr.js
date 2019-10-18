const React = require("react")
const StripeWrapper = require("./src/context/StripeContextProvider").default

exports.wrapRootElement = ({ element }) => {
  return <StripeWrapper>{element}</StripeWrapper>
}
