import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Category from "../components/category"
import Featured from "../components/featured"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Banner></Banner>
      <Category></Category>
      <Featured></Featured>
    </Layout>
  )
}

export default IndexPage
