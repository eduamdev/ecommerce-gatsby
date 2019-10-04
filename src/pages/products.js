import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/grid"
import Section from "../components/section"
import Wrapper from "../components/wrapper"
import ProductContainer from "../components/productContainer"

const Products = () => (
  <Layout>
    <SEO title="Products" />
    <Section>
      <Wrapper>
        <Grid>
          <ProductContainer></ProductContainer>
        </Grid>
      </Wrapper>
    </Section>
  </Layout>
)

export default Products
