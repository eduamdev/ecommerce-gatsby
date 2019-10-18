import React from "react"
import Wrapper from "./wrapper"
import Grid from "./grid"
import Section from "./section"
import Img from "gatsby-image"
import P from "./paragraph"
import LinkUp from "./link"
import { ArrowRight } from "./svg"
import styled from "styled-components"
import useImages from "../hooks/useImages"

const ImgLayer = styled.div`
  background: linear-gradient(transparent 30%, rgba(25, 25, 25, 0.7) 100%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Category = () => {
  const { women, men, rack } = useImages()

  return (
    <Section className="category">
      <Wrapper className="category">
        <Grid className="category">
          <LinkUp
            className="women category-img"
            type="internal"
            url="/women"
            ariaLabel="Shop women"
          >
            <Img fluid={women.childImageSharp.fluid} alt="shop women"></Img>
            <ImgLayer></ImgLayer>
          </LinkUp>
          <LinkUp
            className="men category-img"
            type="internal"
            url="/men"
            ariaLabel="Shop men"
          >
            <Img fluid={men.childImageSharp.fluid} alt="shop men"></Img>
            <ImgLayer></ImgLayer>
          </LinkUp>
          <Img
            className="rack"
            fluid={rack.childImageSharp.fluid}
            alt="shoe rack"
          ></Img>
        </Grid>
        <P style={{ margin: 0 }}>
          <LinkUp
            type="internal"
            className="category women"
            url="/women"
            ariaLabel="Shop women"
          >
            <span>Shop women</span>
            <span className="icon">{ArrowRight}</span>
          </LinkUp>
        </P>
        <P style={{ margin: 0 }}>
          <LinkUp
            type="internal"
            className="category men"
            url="/men"
            ariaLabel="Shop men"
          >
            <span>Shop men</span>
            <span className="icon">{ArrowRight}</span>
          </LinkUp>
        </P>
      </Wrapper>
    </Section>
  )
}

export default Category
