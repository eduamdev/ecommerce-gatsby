import React from "react"
import Wrapper from "./wrapper"

const Footer = () => {
  return (
    <footer>
      <Wrapper>© {new Date().getFullYear()}</Wrapper>
    </footer>
  )
}

export default Footer
