import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Wrapper from "../components/wrapper"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner></Banner>
    <Wrapper>
      <h1>Hello everybody</h1>
      <Link to="/page-2/">Go to page 2</Link>
    </Wrapper>
  </Layout>
)

export default IndexPage
