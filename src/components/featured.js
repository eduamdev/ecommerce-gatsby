import React from "react"
import Section from "./section"
import Wrapper from "./wrapper"
import Grid from "./grid"
import Card from "./card"
import Title from "./title"
import LinkUp from "./link"
import P from "./paragraph"

const Featured = () => {
  return (
    <Section>
      <Wrapper>
        <Title text="Featured" placement="center"></Title>
        <Grid className="featured">
          <Card item={{ url: "/product/desert-boot" }}></Card>
          <Card item={{ url: "/product/desert-boot" }}></Card>
          <Card item={{ url: "/product/desert-boot" }}></Card>
          <Card item={{ url: "/product/desert-boot" }}></Card>
        </Grid>
        <Grid>
          <LinkUp
            type="internal"
            url="/products"
            className="featured"
            ariaLabel="Discover more"
          >
            <P style={{ margin: 0, fontWeight: 700 }}>Discover more</P>
          </LinkUp>
        </Grid>
      </Wrapper>
    </Section>
  )
}

export default Featured
