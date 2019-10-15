import React from "react"
import Section from "./section"
import Wrapper from "./wrapper"
import Grid from "./grid"
import Card from "./card"
import Title from "./title"
import P from "./paragraph"
import items from "../content/products.json"
import useImages from "../hooks/useImages"

const Featured = () => {
  let featuredProducts = items.filter(product => product.featured === true)
  const images = useImages()

  return (
    <Section style={{ paddingBottom: `1.5em` }}>
      <Wrapper>
        <Title
          type="h3"
          className="featured"
          text="Featured"
          placement="center"
        ></Title>
        <Grid className="featured">
          {featuredProducts.map(item => {
            const image = images[item.slug.replace(/-/g, "_")]

            return <Card key={item.id} item={item} imageGraphQL={image}></Card>
          })}
        </Grid>
        <Grid>
          <P className="featured">Discover more</P>
        </Grid>
      </Wrapper>
    </Section>
  )
}

export default Featured
