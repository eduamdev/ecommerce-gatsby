import React from "react"
import styled, { css } from "styled-components"
import { viewport } from "./breakpoints"
import PropTypes from "prop-types"

const Container = styled.div`
  display: grid;
  align-items: center;

  &.card-title {
    padding-top: 0.5em;
    border-top: 1px solid #ddd;
    margin-top: 0.5em;
  }

  ${props =>
    props.placement === "left" &&
    css`
      justify-content: start;
      text-align: left;
    `}

  ${props =>
    props.placement === "center" &&
    css`
      justify-content: center;
      text-align: center;
    `}

  ${props =>
    props.placement === "right" &&
    css`
      justify-content: end;
      text-align: right;
    `}

  @media ${viewport[7]} {
    grid-template-columns: auto;
  }

  &.header {
    display: unset;
  }  

  &.payment-title, &.orderSummary-title{
    margin-bottom: 1em;

    @media ${viewport[7]} {
      margin-bottom: 3em;
    }
  }
`

const StyledH1 = styled.h1`
  display: inline;
  font-weight: 900;
  padding: 0;
  letter-spacing: -0.5px;
  font-size: 2.5em;

  @media ${viewport[4]} {
    font-size: 2.55em;
  }

  @media ${viewport[7]} {
    font-size: 2.9em;
  }

  @media ${viewport[9]} {
    font-size: 3.6em;
  }

  &.banner {
    position: absolute;
    top: 10%;
    left: 0.5em;
    font-weight: 900;
    letter-spacing: -2.25px;
    margin: 0;

    @media ${viewport[7]} {
      left: 1.3em;
    }

    @media ${viewport[9]} {
      left: 2em;
      letter-spacing: -2px;
    }

    @media ${viewport[12]} {
      left: 3em;
      letter-spacing: -1.5px;
    }

    & .banner-span {
      /* color: #bb7878; */
      color: tomato;
      font-size: 0.3em;
      line-height: 1.7;
      display: block;
      letter-spacing: 2px;
      font-weight: 900;
      text-transform: uppercase;
      text-shadow: 2px 3px #fff;
    }
  }
`

const StyledH2 = styled.h2`
  display: inline;
  font-size: 1.55em;
  font-weight: 900;
  padding: 0;
  letter-spacing: -0.5px;

  @media ${viewport[4]} {
    font-size: 1.75em;
  }

  @media ${viewport[7]} {
    font-size: 2em;
    letter-spacing: -0.4px;
  }

  @media ${viewport[9]} {
    font-size: 2.5em;
  }

  &.product-name {
    margin: 0;
    font-size: 1.35em;

    @media ${viewport[4]} {
      font-size: 1.55em;
    }

    @media ${viewport[7]} {
      font-size: 1.75em;
    }

    @media ${viewport[9]} {
      font-size: 2em;
    }
  }
`

const StyledH3 = styled.h3`
  display: inline;
  font-weight: 900;
  padding: 0;
  letter-spacing: -0.5px;
  font-size: 1.2em;

  &.featured {
    font-size: 1.75em;
  }

  &.logo-text {
    margin-bottom: 0;
    font-size: 1.4em;
    font-family: "Playfair Display", serif;
    font-style: italic;
    letter-spacing: -0.75px;
  }

  &.product-details__title,
  &.product-reviews__title {
    margin: 0;
  }

  @media ${viewport[4]} {
    font-size: 1.35em;
  }

  @media ${viewport[7]} {
    font-size: 1.45em;
    letter-spacing: -0.4px;
  }

  @media ${viewport[9]} {
    font-size: 1.55em;
  }
`

const StyledH4 = styled.h4`
  display: inline;
  font-weight: 900;
  padding: 0;
  letter-spacing: -0.3px;

  &.card-title {
    font-size: 1.1em;
    margin-bottom: 0.5em;
    padding-top: 0.5em;
  }

  &.title-review {
    margin: 1em 0;
  }

  &.cart-product-name {
    padding-top: 30px;
    text-align: left;
  }

  &.footer {
    font-weight: 700;
  }
`

Title.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  placement: PropTypes.string,
  children: PropTypes.node,
}

Title.defaultProps = {
  placement: `left`,
  type: `h2`,
}

export default function Title({ type, text, className, placement, children }) {
  return (
    <Container className={className} placement={placement}>
      {type === "h1" && <StyledH1 className={className}>{children}</StyledH1>}
      {type === "h2" && <StyledH2 className={className}>{text}</StyledH2>}
      {type === "h3" && <StyledH3 className={className}>{text}</StyledH3>}
      {type === "h4" && <StyledH4 className={className}>{text}</StyledH4>}
    </Container>
  )
}
