import React from "react"
import Section from "./section"
import Image from "./image"
import Title from "./title"
import P from "./paragraph"

const Banner = () => {
  return (
    <Section className="banner">
      <Image></Image>
      <Title type="h1" className="banner">
        <span className="banner-span">New</span> Sport Collection
      </Title>
      <P className="banner">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
        soluta.
      </P>
    </Section>
  )
}

export default Banner
