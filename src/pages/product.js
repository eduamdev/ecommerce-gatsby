import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/grid"
import Section from "../components/section"
import Wrapper from "../components/wrapper"

const Product = () => (
  <Layout>
    <SEO title="Product" />
    <Section>
      <Wrapper>
        <Grid>product</Grid>
      </Wrapper>
    </Section>
  </Layout>
)

export default Product
