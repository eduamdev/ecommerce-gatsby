import React from "react"
import Img from "gatsby-image"
import Section from "./section"
import Title from "./title"
import P from "./paragraph"
import useImages from "../hooks/useImages"

const Banner = () => {
  const { banner } = useImages()

  return (
    <Section className="banner">
      <Img fluid={banner.childImageSharp.fluid} alt="banner"></Img>
      <Title type="h1" className="banner">
        <span className="banner-span">New</span> Sport Collection
      </Title>
      <P className="banner-disclaimer">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
        soluta. Lorem ipsum dolor sit.
      </P>
    </Section>
  )
}

export default Banner
