import React, { useEffect, useContext } from "react"
import { GlobalDispatchContext } from "../context/GlobalContextProvider"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Articles from "../components/articles"
import Rack from "../components/rack"
import Featured from "../components/featured"
import Flex from "../components/flex"
import P from "../components/paragraph"

const IndexPage = () => {
  const dispatch = useContext(GlobalDispatchContext)

  useEffect(() => {
    dispatch({ type: "RESET_PURCHASE" })
  }, [dispatch])

  return (
    <>
      <Flex className="announcement-bar">
        <P>Free International Shipping!</P>
      </Flex>
      <Layout>
        <SEO title="Home" />
        <Banner />
        <Articles />
        <Rack />
        <Featured />
      </Layout>
    </>
  )
}

export default IndexPage
