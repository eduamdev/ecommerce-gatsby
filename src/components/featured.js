import React from "react"
import Section from "./section"
import Wrapper from "./wrapper"
import Grid from "./grid"
import Card from "./card"
import Heading from "./heading"
import P from "./paragraph"
import items from "../content/products.json"
import useImages from "../hooks/useImages"
import styled from "styled-components"

const StyledSection = styled(Section)`
  & .featured-wrapper {
    padding-top: 1.5em;
    padding-bottom: 1.5em;
  }

  & .featured-title {
    text-align: center;
    margin-bottom: 1.25em;
  }

  & .featured-link {
    color: hsla(358, 85%, 32%, 1);
    margin-top: 1.5em;
    font-weight: 400;
    text-align: center;
  }
`

const Featured = () => {
  let featuredProducts = items.filter(product => product.featured === true)
  const images = useImages()

  return (
    <StyledSection className="featured">
      <Heading rank={2} className="featured-title">
        Featured Products
      </Heading>
      <Wrapper className="featured-wrapper">
        <Grid className="featured">
          {featuredProducts.map(item => {
            const image = images[item.image]

            return <Card key={item.id} item={item} imageGraphQL={image}></Card>
          })}
        </Grid>
      </Wrapper>
      <P className="featured-link">Discover more</P>
    </StyledSection>
  )
}

export default Featured
