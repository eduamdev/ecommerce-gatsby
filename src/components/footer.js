import React from "react"
import Wrapper from "./wrapper"

const Footer = () => {
  return (
    <footer style={{ backgroundColor: `#fff` }}>
      <Wrapper>© {new Date().getFullYear()}</Wrapper>
    </footer>
  )
}

export default Footer
