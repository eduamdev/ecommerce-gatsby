import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Category from "../components/category"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Banner></Banner>
      <Category></Category>
    </Layout>
  )
}

export default IndexPage
