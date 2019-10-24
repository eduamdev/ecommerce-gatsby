import React, { useEffect, useContext } from "react"
import { GlobalDispatchContext } from "../context/GlobalContextProvider"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/grid"
import Section from "../components/section"
import Wrapper from "../components/wrapper"
import ProductContainer from "../components/productContainer"

const Products = ({ pageContext }) => {
  const dispatch = useContext(GlobalDispatchContext)

  useEffect(() => {
    dispatch({ type: "RESET_PURCHASE" })
  }, [dispatch])

  return (
    <Layout>
      <SEO title="Products" />
      <Section style={{ padding: `2em 0 5em 0` }}>
        <Wrapper>
          <Grid className="productContainer">
            <ProductContainer
              products={pageContext.products}
            ></ProductContainer>
          </Grid>
        </Wrapper>
      </Section>
    </Layout>
  )
}

export default Products
