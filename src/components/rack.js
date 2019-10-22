import React from "react"
import Img from "gatsby-image"
import Section from "./section"
import Wrapper from "./wrapper"
import useImages from "../hooks/useImages"
import styled from "styled-components"
import { viewport } from "./breakpoints"

const Block = styled.div`
  display: block;
  position: relative;

  @media ${viewport[9]} {
    width: 85%;
  }

  & .rack-image {
  }

  & .rack-card {
    z-index: 1000;
    position: absolute;
    bottom: -5em; /*  Same size padding bottom section */
    left: 20%;
    right: unset;
    background: #fff;
    padding: 1.75em;
    box-shadow: 3px 3px 1px 1px rgba(150, 150, 150, 0.1);
    max-width: 100%;

    @media ${viewport[9]} {
      left: unset;
      right: -20%;
      bottom: 5%;
      max-width: 500px;
      padding: 1.5em;
    }

    & .rack-card__title {
      font-size: 1em;
      margin-bottom: 0.8em;

      @media ${viewport[7]} {
        font-size: 1.15em;
      }
    }

    & .rack-card__text {
      margin: 0;
      font-size: 0.85em;

      @media ${viewport[7]} {
        font-size: 0.95em;
      }
    }
  }
`

const Rack = () => {
  const { rack } = useImages()

  return (
    <Section className="rack">
      <Wrapper>
        <Block>
          <Img
            className="rack-img"
            fluid={rack.childImageSharp.fluid}
            alt="about shoemaking"
          ></Img>
          <div className="rack-card">
            <h4 className="rack-card__title">Lorem, ipsum dolor.</h4>
            <p className="rack-card__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </Block>
      </Wrapper>
    </Section>
  )
}

export default Rack
