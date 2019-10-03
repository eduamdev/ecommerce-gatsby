import React from "react"
import PropTypes from "prop-types"
import Grid from "./grid"
import LinkUp from "./link"
import Title from "./title"
import P from "./paragraph"
// import Img from "gatsby-image"

const Card = ({ item, image }) => {
  return (
    <article>
      <Grid className="card">
        <LinkUp
          className="card-image"
          type="internal"
          url={item.url}
          ariaLabel=""
        >
          <img
            src="https://clarks.scene7.com/is/image/Pangaea2Build/26138235_W_1"
            alt=""
          />
          <Title
            type="h3"
            className="card-title"
            text="Desert Boots"
            placement="center"
          ></Title>
          <P className="card-description">Lorem, ipsum dolor.</P>
          <P className="card-label">$250</P>
        </LinkUp>
      </Grid>
    </article>
  )
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
  image: PropTypes.object,
}

export default Card
