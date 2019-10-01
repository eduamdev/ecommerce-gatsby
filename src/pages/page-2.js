import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Wrapper from "../components/wrapper"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Wrapper>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Wrapper>
  </Layout>
)

export default SecondPage
