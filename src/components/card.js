import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Grid from "./grid"
import LinkUp from "./link"
import Heading from "./heading"
import P from "./paragraph"
import Img from "gatsby-image"
import "aos/dist/aos.css"

const Card = ({ item, imageGraphQL }) => {
  const { name, description, slug, price } = item

  useEffect(() => {
    const AOS = require("aos")
    AOS.init()
  }, [])

  return (
    <article style={{ height: `100%` }} data-aos="fade-in">
      <Grid className="card">
        <LinkUp
          className="card-image"
          type="internal"
          url={`/product/${slug}`}
          ariaLabel={name}
        >
          <Img fluid={imageGraphQL.childImageSharp.fluid} alt={name}></Img>
          <Heading rank={3} className="card-title">
            {name}
          </Heading>
          <P className="card-description">{description}</P>
          <span className="card-label">${price}</span>
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
