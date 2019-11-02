import React from "react"
import styled from "styled-components"
import { viewport } from "./breakpoints"
import PropTypes from "prop-types"

const StyledParagraph = styled.p`
  font-family: "PT Serif", serif;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: normal;
  word-spacing: normal;
  margin: 0;
  border: none;
  outline: none;
  margin-bottom: 1.45rem;

  @media ${viewport[9]} {
    font-size: 18px;
    line-height: 26px;
  }

  &.banner-disclaimer {
    position: absolute;
    left: 10%;
    bottom: 5%;
    max-width: 80%;
    text-align: left;
    font-size: 0.85em;
    /* line-height: 1.9; */
    margin: 0;

    @media ${viewport[7]} {
      /* font-size: 0.8em; */
      /* letter-spacing: 0.3px; */
      text-align: right;
      right: 10%;
      left: unset;
    }

    @media ${viewport[9]} {
      font-size: 0.95em;
    }
  }

  &.card-description {
    font-weight: 400;
    margin-bottom: 1em;
    text-align: left;
    /* font-size: 0.875em; */
    /* letter-spacing: 0.3px; */
  }

  &.card-label,
  &.product-info__price {
    /* font-size: 0.9em; */
    /* color: #ed1c24; */
  }

  &.product-info__price {
    font-weight: 500;
    margin: 0.5em 0;
    font-size: 1.25em;
    /* letter-spacing: 0.5px; */

    @media ${viewport[7]} {
      /* font-size: 1.3em; */
    }

    @media ${viewport[12]} {
      /* font-size: 1.35em; */
    }
  }

  &.featured {
    color: #0277bd;
    margin-top: 1.75em;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    font-size: 0.9em;
  }

  &.footer {
    font-family: "Poppins", sans-serif;
  }

  &.quantity {
    margin-top: 2em;
    margin-bottom: 1.25em;
    display: grid;
    grid-template-columns: max-content max-content max-content;
  }
`

const P = ({ className, children, style }) => {
  return (
    <StyledParagraph className={className} style={style}>
      {children}
    </StyledParagraph>
  )
}

P.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
}

export default P
