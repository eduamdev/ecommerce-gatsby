import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Category from "../components/category"
import Featured from "../components/featured"
import Shoemaking from "../components/shoemaking"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Banner></Banner>
      <Category></Category>
      <Shoemaking></Shoemaking>
      <Featured></Featured>
    </Layout>
  )
}

export default IndexPage
