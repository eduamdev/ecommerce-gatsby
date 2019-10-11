import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/grid"
import Section from "../components/section"
import Wrapper from "../components/wrapper"
import ProductFilter from "../components/productFilter"
import ProductList from "../components/productList"

const Products = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title="Products" />
      <Section style={{ padding: `1em 0 3em 0` }}>
        <Wrapper>
          <Grid className="productContainer">
            <ProductFilter products={pageContext.products}></ProductFilter>
            <ProductList products={pageContext.products}></ProductList>
          </Grid>
        </Wrapper>
      </Section>
    </Layout>
  )
}

export default Products
