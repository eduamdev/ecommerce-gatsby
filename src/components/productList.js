import React from "react"
import Section from "./section"
import Grid from "./grid"
import Card from "./card"
import PropTypes from "prop-types"

const ProductList = ({ products }) => (
  <Section className="products">
    <Grid className="productList">
      {products.map(item => {
        return <Card key={item.id} item={item}></Card>
      })}
    </Grid>
  </Section>
)

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
}

ProductList.defaultProps = {
  products: [],
}

export default ProductList
