import React from "react"
import Section from "./section"
import Wrapper from "./wrapper"
import Grid from "./grid"
import Card from "./card"
import Title from "./title"
import P from "./paragraph"
import items from "../content/products.json"

const Featured = () => {
  let featuredProducts = items.filter(product => product.featured === true)

  return (
    <Section>
      <Wrapper>
        <Title text="Featured" placement="center"></Title>
        <Grid className="featured">
          {featuredProducts.map(item => {
            return <Card key={item.id} item={item}></Card>
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
