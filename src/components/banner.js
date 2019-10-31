import React, { useEffect } from "react"
import Img from "gatsby-image"
import Section from "./section"
import Title from "./title"
import P from "./paragraph"
import "aos/dist/aos.css"
import useImages from "../hooks/useImages"

const Banner = () => {
  const { banner } = useImages()

  useEffect(() => {
    const AOS = require("aos")
    AOS.init()
  }, [])

  return (
    <Section className="banner">
      <Img fluid={banner.childImageSharp.fluid} alt="banner"></Img>
      <Title type="h1" className="banner">
        <div data-aos="fade-up">
          <span className="banner-span">New</span> Sport Collection
        </div>
      </Title>
      <P className="banner-disclaimer">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
        soluta.
      </P>
    </Section>
  )
}

export default Banner
