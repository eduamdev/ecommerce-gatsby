import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Wrapper from "../components/wrapper"
import Section from "../components/section"
import Title from "../components/title"
import P from "../components/paragraph"
import Grid from "../components/grid"
import LinkUp from "../components/link"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Section style={{ padding: `2em 0` }}>
      <Wrapper>
        <Grid className="error">
          <Title type="h2" text="Page not found" placement="center"></Title>
          <P style={{ margin: 0 }}>
            The page you were looking for does not exist
          </P>
        </Grid>
        <Grid>
          <LinkUp
            className="error"
            type="internal"
            url="/men"
            ariaLabel="Go to shop"
          >
            Continue shopping
          </LinkUp>
        </Grid>
      </Wrapper>
    </Section>
  </Layout>
)

export default NotFoundPage
