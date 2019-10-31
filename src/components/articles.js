import React, { useEffect } from "react"
import Wrapper from "./wrapper"
import Grid from "./grid"
import Section from "./section"
import Img from "gatsby-image"
import useImages from "../hooks/useImages"
import "aos/dist/aos.css"

const Articles = () => {
  const { shoe1, shoe2, shoe3 } = useImages()

  useEffect(() => {
    const AOS = require("aos")
    AOS.init()
  }, [])

  return (
    <Section style={{ background: "rgba(238, 238, 248, 0.3)" }}>
      <Wrapper>
        <Grid className="articles">
          <article className="article" data-aos="fade-up" data-aos-delay="50">
            <Img
              className="article-img"
              fluid={shoe1.childImageSharp.fluid}
              alt="Shoe 1"
            ></Img>
            <div className="article-text">
              <span>Lorem.</span>
              <h6 className="article-title">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Mollitia, earum.
              </h6>
            </div>
          </article>

          <article className="article" data-aos="fade-up" data-aos-delay="50">
            <Img
              className="article-img"
              fluid={shoe2.childImageSharp.fluid}
              alt="Shoe 2"
            ></Img>
            <div className="article-text">
              <span>Lorem, ipsum.</span>
              <h6 className="article-title">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Mollitia, earum.
              </h6>
            </div>
          </article>
          <article className="article" data-aos="fade-up" data-aos-delay="50">
            <Img
              className="article-img"
              fluid={shoe3.childImageSharp.fluid}
              alt="Shoe 3"
            ></Img>
            <div className="article-text">
              <span>Lorem, ipsum dolor.</span>
              <h6 className="article-title">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Mollitia, earum.
              </h6>
            </div>
          </article>
        </Grid>
      </Wrapper>
    </Section>
  )
}

export default Articles
