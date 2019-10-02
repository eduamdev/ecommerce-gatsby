import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Wrapper from "../components/wrapper"
import Grid from "../components/grid"
import Section from "../components/section"
import Img from "gatsby-image"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      women: file(relativePath: { eq: "women.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 800
            duotone: { highlight: "#DC4379", shadow: "#11245E" }
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      men: file(relativePath: { eq: "men.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 800
            duotone: { highlight: "#FF9738", shadow: "#36200C" }
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Banner></Banner>
      <Section>
        <Wrapper className="type">
          <Grid className="type">
            <Img
              fluid={data.women.childImageSharp.fluid}
              alt="shop women"
            ></Img>
            <Img fluid={data.men.childImageSharp.fluid} alt="shop men"></Img>
          </Grid>
          <Link
            style={{
              position: `absolute`,
              bottom: `30px`,
              left: `90px`,
              fontSize: `1.15em`,
              color: `#fff`,
              textDecoration: `none`,
            }}
            to="/page-2/"
          >
            Shop womens
          </Link>

          <Link
            style={{
              position: `absolute`,
              bottom: `30px`,
              right: `90px`,
              fontSize: `1.15em`,
              color: `#fff`,
              textDecoration: `none`,
            }}
            to="/page-2/"
          >
            Shop mens
          </Link>
        </Wrapper>
      </Section>
    </Layout>
  )
}

export default IndexPage
