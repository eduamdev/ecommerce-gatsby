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
  const { about } = useImages()

  return (
    <Section>
      <Wrapper>
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
                  display: `inline`,
                }}
              >
                Learn more about our shoemaking process
              </P>
            </Flex>
          </div>
          <div>
            <Img
              fluid={about.childImageSharp.fluid}
              alt="about shoemaking"
            ></Img>
          </div>
        </Grid>
      </Wrapper>
    </Section>
  )
}

export default Shoemaking
