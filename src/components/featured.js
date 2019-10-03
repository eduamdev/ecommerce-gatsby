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
          <Card item={{ url: "/page-2" }}></Card>
          <Card item={{ url: "/page-2" }}></Card>
          <Card item={{ url: "/page-2" }}></Card>
          <Card item={{ url: "/page-2" }}></Card>
        </Grid>
        <Grid>
          <LinkUp
            type="internal"
            url="/page-2"
            className="featured"
            ariaLabel="Discover more"
          >
            <P style={{ margin: 0 }}>Discover more</P>
          </LinkUp>
        </Grid>
      </Wrapper>
    </Section>
  )
}

export default Featured