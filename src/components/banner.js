import React from "react"
import Section from "./section"
import Image from "./image"

const Banner = () => {
  return (
    <Section className="banner">
      <Image></Image>
      <h1
        style={{
          position: `absolute`,
          top: `10%`,
          left: `15.5%`,
          fontWeight: `900`,
          fontSize: `3.9em`,
          letterSpacing: `-1px`,
          margin: 0,
        }}
      >
        <span
          style={{
            color: `#bb7878`,
            fontSize: `0.8em`,
            lineHeight: `1.4`,
            display: `block`,
            letterSpacing: `2px`,
            fontWeight: `200`,
            fontFamily: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
          }}
        >
          New
        </span>{" "}
        Sport Collection
      </h1>
    </Section>
  )
}

export default Banner
