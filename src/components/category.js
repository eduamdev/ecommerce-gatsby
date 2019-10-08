import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Wrapper from "./wrapper"
import Grid from "./grid"
import Section from "./section"
import Img from "gatsby-image"
import P from "./paragraph"
import LinkUp from "./link"
import { ArrowRight } from "./svg"
import styled from "styled-components"

const ImgLayer = styled.div`
  /* background: linear-gradient(
    rgba(230, 100, 101, 0.5),
    rgba(145, 152, 229, 0.9)
  ); */
  background: linear-gradient(transparent 30%, rgba(25, 25, 25, 0.7) 100%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Category = () => {
  const data = useStaticQuery(graphql`
    query {
      women: file(relativePath: { eq: "women.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      men: file(relativePath: { eq: "men.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rack: file(relativePath: { eq: "shoe-rack.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800, maxHeight: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Section>
      <Wrapper className="category">
        <Grid className="category">
          <LinkUp
            className="women category-img"
            type="internal"
            url="/products"
            ariaLabel="Shop women"
          >
            <Img
              fluid={data.women.childImageSharp.fluid}
              alt="shop women"
            ></Img>
            <ImgLayer></ImgLayer>
          </LinkUp>
          <LinkUp
            className="men category-img"
            type="internal"
            url="/products"
            ariaLabel="Shop men"
          >
            <Img fluid={data.men.childImageSharp.fluid} alt="shop men"></Img>
            <ImgLayer></ImgLayer>
          </LinkUp>
          <Img
            className="rack"
            fluid={data.rack.childImageSharp.fluid}
            alt="shoe rack"
          ></Img>
        </Grid>
        <P style={{ margin: 0 }}>
          <LinkUp
            type="internal"
            className="category"
            style={{
              position: `absolute`,
              bottom: `7%`,
              left: `10%`,
              color: `#fff`,
              textDecoration: `none`,
              margin: 0,
            }}
            url="/products"
            ariaLabel="Shop women"
          >
            <span
              style={{
                borderBottom: `1px solid #fff`,
                fontWeight: 700,
                letterSpacing: `0.8px`,
              }}
            >
              Shop women
            </span>
            <span className="svg">{ArrowRight}</span>
          </LinkUp>
        </P>
        <P style={{ margin: 0 }}>
          <LinkUp
            type="internal"
            className="category"
            style={{
              position: `absolute`,
              bottom: `7%`,
              right: `10%`,
              color: `#fff`,
              textDecoration: `none`,
              margin: 0,
            }}
            url="/products"
            ariaLabel="Shop men"
          >
            <span
              style={{
                borderBottom: `1px solid #fff`,
                fontWeight: 700,
                letterSpacing: `0.8px`,
              }}
            >
              Shop men
            </span>
            <span className="svg">{ArrowRight}</span>
          </LinkUp>
        </P>
      </Wrapper>
    </Section>
  )
}

export default Category
