import React from "react"
import Img from "gatsby-image"
import Section from "./section"
import Wrapper from "./wrapper"
import Grid from "./grid"
import Title from "./title"
import P from "./paragraph"
import Flex from "./flex"
import useImages from "../hooks/useImages"

const Shoemaking = () => {
  const { shoemaking } = useImages()

  return (
    <Section style={{ marginBottom: `2em` }}>
      <Wrapper className="shoemaking">
        <Grid className="shoemaking">
          <div className="text">
            <Title
              type="h2"
              className="shoemaking"
              text="Not all footwear are created equal"
            ></Title>
            <Flex className="shoemaker">
              <P
                style={{
                  margin: 0,
                  marginBottom: `1.5em`,
                  display: `inline`,
                }}
              >
                Learn more about our shoemaking process and get involved
              </P>
            </Flex>
            <P className="shoemakingLink">Discover more</P>
          </div>
          <div>
            <Img
              fluid={shoemaking.childImageSharp.fluid}
              alt="about shoemaking"
            ></Img>
          </div>
        </Grid>
      </Wrapper>
    </Section>
  )
}

export default Shoemaking
