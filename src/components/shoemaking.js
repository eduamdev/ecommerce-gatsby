import React from "react"
import Section from "./section"
import Wrapper from "./wrapper"
import Grid from "./grid"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Title from "./title"
import P from "./paragraph"
import { ArrowRight } from "./svg"
import Flex from "./flex"

const Shoemaking = () => {
  const data = useStaticQuery(graphql`
    query {
      about: file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

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
                  borderBottom: `1px solid`,
                  display: `inline`,
                }}
              >
                Learn more about our shoemaking process
              </P>
              <span style={{ width: `24px` }}>{ArrowRight}</span>
            </Flex>
          </div>
          <div>
            <Img fluid={data.about.childImageSharp.fluid} />
          </div>
        </Grid>
      </Wrapper>
    </Section>
  )
}

export default Shoemaking
