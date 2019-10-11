import React from "react"
import PropTypes from "prop-types"
import Grid from "./grid"
import LinkUp from "./link"
import Title from "./title"
import P from "./paragraph"
// import Img from "gatsby-image"

const Card = ({ item }) => {
  const { name, description, slug, image, price } = item

  return (
    <article>
      <Grid className="card">
        <LinkUp
          className="card-image"
          type="internal"
          url={`/product/${slug}`}
          ariaLabel={name}
        >
          <img src={image.url} alt={name} />
          <Title
            type="h3"
            className="card-title"
            text={name}
            placement="center"
          ></Title>
          <P className="card-description">{description}</P>
          <P className="card-label">${price}</P>
        </LinkUp>
      </Grid>
    </article>
  )
}

Card.propTypes = {
  product: PropTypes.object.isRequired,
}

Card.defaultProps = {
  product: {},
}

export default Card
