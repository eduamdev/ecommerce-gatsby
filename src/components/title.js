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
    margin-bottom: 2.5em;
  }

  &.orderSummary-title{
    @media ${viewport[7]} {
      /* margin-bottom: 3em; */
    }
  }
`

const StyledH1 = styled.h1`
  display: inline;
  font-weight: 900;
  padding: 0;
  letter-spacing: -0.5px;
  font-size: 2.5em;
  color: #000;

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
    letter-spacing: -1.75px;
    margin: 0;

    @media ${viewport[7]} {
      left: 1.3em;
    }

    @media ${viewport[9]} {
      left: 2em;
      letter-spacing: -1px;
    }

    @media ${viewport[12]} {
      left: 3em;
      letter-spacing: -0.5px;
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
  /* display: inline; */
  font-size: 1.55em;
  font-weight: 700;
  margin-bottom: 1em;
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
    font-size: 1.275em;
    font-weight: 600;

    @media ${viewport[4]} {
      font-size: 1.275em;
    }

    @media ${viewport[7]} {
      font-size: 1.3em;
    }

    @media ${viewport[12]} {
      font-size: 1.35em;
    }
  }
`

const StyledH3 = styled.h3`
  display: inline;
  font-weight: 700;
  padding: 0;
  letter-spacing: -0.5px;
  font-size: 1.2em;

  &.featured {
    font-size: 1.45em;
    position: relative;
    margin-bottom: 1.25em;
    letter-spacing: -0.2px;
    /* word-spacing: 5px; */

    /* &:before {
      content: "";
      position: absolute;
      width: 30%;
      height: 1px;
      bottom: -80%;
      left: 35%;
      border-bottom: 2px solid #2b5061;
      border-radius: 8px;
    } */
  }

  &.logo-text {
    margin-bottom: 0;
    font-size: 1.3em;
    font-family: "Playfair Display", serif;
    font-style: italic;
    letter-spacing: -0.5px;
    color: #000;
  }

  &.payment-title,
  &.orderSummary-title {
    letter-spacing: 0;
    font-weight: 600;
  }

  &.product-details__title,
  &.product-reviews__title {
    font-size: 1.3em;
    margin: 0;
    font-weight: 600;
  }

  &.shoppingSuccessful{
    color: #338a3e;
    font-weight: 500;
    font-size: 1.3em;
  }

  @media ${viewport[4]} {
    font-size: 1.2em;
  }

  @media ${viewport[7]} {
    /* font-size: 1.3em; */
    letter-spacing: -0.4px;
  }

  @media ${viewport[9]} {
    font-size: 1.25em;
  }
`

const StyledH4 = styled.h4`
  display: inline;
  padding: 0;
  font-weight: 600;
  /* letter-spacing: -0.3px; */

  &.card-title {
    font-size: 1em;
    margin-bottom: 0.5em;
    padding-top: 0.5em;

    @media ${viewport[12]} {
      font-size: 1.1em;
    }
  }

  &.title-review {
    margin: 1em 0;
    color: #000;
  }

  &.cart-product-name {
    padding-top: 30px;
    text-align: left;
  }

  &.footer {
    font-weight: 500;
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
