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
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23969091' fill-opacity='0.34'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");
  }

  & .featured-title {
    text-align: center;
    margin-bottom: 1.25em;
  }

  & .featured-link {
    color: hsla(358, 85%, 32%, 1);
    margin-top: 1.5em;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
    text-align: center;
  }
`

const Featured = () => {
  let featuredProducts = items.filter(product => product.featured === true)
  const images = useImages()

  return (
    <StyledSection className="featured">
      {/* <Title
        type="h3"
        className="featured"
        text="Featured Products"
        placement="center"
      ></Title> */}
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
