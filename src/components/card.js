import React from "react"
import PropTypes from "prop-types"
import Grid from "./grid"
import LinkUp from "./link"
import Title from "./title"
import P from "./paragraph"
import Img from "gatsby-image"

const Card = ({ item, imageGraphQL }) => {
  const { name, description, slug, price } = item

  return (
    <article style={{ height: `100%` }}>
      <Grid className="card">
        <LinkUp
          className="card-image"
          type="internal"
          url={`/product/${slug}`}
          ariaLabel={name}
        >
          <Img fluid={imageGraphQL.childImageSharp.fluid} alt={name}></Img>
          <Title
            type="h4"
            className="card-title"
            text={name}
            placement="left"
          ></Title>
          <P className="card-description">{description}</P>
          <P className="card-label">${price}</P>
        </LinkUp>
      </Grid>
    </article>
  )
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
  imageGraphQL: PropTypes.object.isRequired,
}

Card.defaultProps = {
  item: {},
  imageGraphQL: {},
}

export default Card
