import React, { useContext } from "react"
import Section from "./section"
import Wrapper from "./wrapper"
import Grid from "./grid"
import Card from "./card"
import Title from "./title"
import LinkUp from "./link"
import P from "./paragraph"
import { GlobalStateContext } from "../context/GlobalContextProvider"

const Featured = () => {
  const state = useContext(GlobalStateContext)
  return (
    <Section>
      <Wrapper>
        <Title text="Featured" placement="center"></Title>
        <Grid className="featured">
          {state.featuredProducts.map(item => {
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
