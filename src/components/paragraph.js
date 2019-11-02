import React from "react"
import styled from "styled-components"
import { viewport } from "./breakpoints"
import PropTypes from "prop-types"

const StyledParagraph = styled.p`
  font-size: 0.95em;
  margin: 0;
  line-height: 1.65;
  border: none;
  outline: none;
  margin-bottom: 1.45rem;
  letter-spacing: 0.25px;

  @media ${viewport[4]} {
    font-size: 0.9em;
    line-height: 1.68;
  }

  @media ${viewport[7]} {
    line-height: 1.7;
    letter-spacing: 0.1px;
  }

  @media ${viewport[9]} {
    font-size: 0.95em;
    letter-spacing: 0.2px;
    line-height: 1.65;
  }

  @media ${viewport[12]} {
    font-size: 0.92em;
    letter-spacing: 0.275px;
    line-height: 1.7;
    font-weight: 400;
  }

  &.banner-disclaimer {
    position: absolute;
    left: 10%;
    bottom: 5%;
    max-width: 80%;
    text-align: left;
    font-size: 0.7em;
    line-height: 1.9;
    margin: 0;

    @media ${viewport[7]} {
      font-size: 0.8em;
      letter-spacing: 0.3px;
      text-align: right;
      right: 10%;
      left: unset;
    }

    @media ${viewport[9]} {
      font-size: 0.9em;
    }
  }

  &.card-description {
    font-weight: 400;
    margin-bottom: 1em;
    text-align: left;
    font-size: 0.875em;
    letter-spacing: 0.3px;
  }

  &.card-label,
  &.product-info__price {
    font-size: 0.9em;
    /* color: #ed1c24; */
  }

  &.card-label {
    font-weight: 500;
    letter-spacing: -0.2px;
    margin-bottom: 0;
    text-align: right;
    position: absolute;
    right: 7%;
    bottom: 3.5%;

    @media ${viewport[7]} {
      font-size: 1em;
    }

    @media ${viewport[12]} {
      font-size: 1.1em;
    }
  }

  &.product-info__price {
    font-weight: 500;
    margin: 0.5em 0;
    font-size: 1.25em;
    letter-spacing: 0.5px;

    @media ${viewport[7]} {
      font-size: 1.3em;
    }

    @media ${viewport[12]} {
      font-size: 1.35em;
    }
  }

  &.featured {
    color: #0277bd;
    margin-top: 1em;
    font-weight: 600;
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
