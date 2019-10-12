import React from "react"
import Section from "./section"
import Grid from "./grid"
import Card from "./card"
import PropTypes from "prop-types"
import useImages from "../hooks/useImages"

const ProductList = ({ products }) => {
  const images = useImages()
  return (
    <Section className="products">
      <Grid className="productList">
        {products.map(item => {
          const image = images[item.slug.replace(/-/g, "_")]

          return <Card key={item.id} item={item} imageGraphQL={image}></Card>
        })}
      </Grid>
    </Section>
  )
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
}

ProductList.defaultProps = {
  products: [],
}

export default ProductList
