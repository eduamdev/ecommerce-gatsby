import React from "react"
import Section from "./section"
import Image from "./image"
import Title from "./title"

const Banner = () => {
  return (
    <Section className="banner">
      <Image></Image>
      <Title type="h1" className="banner">
        <span className="banner-span">New</span> Sport Collection
      </Title>
    </Section>
  )
}

export default Banner
