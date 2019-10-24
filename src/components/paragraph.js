import React from "react"
import styled from "styled-components"
import { viewport } from "./breakpoints"
import PropTypes from "prop-types"

const StyledParagraph = styled.p`
  font-size: 0.95em;
  margin: 0;
  line-height: 1.5;
  border: none;
  outline: none;
  margin-bottom: 1.45rem;

  @media ${viewport[4]} {
    font-size: 0.9em;
    line-height: 1.5;
  }

  @media ${viewport[7]} {
    line-height: 1.4;
    letter-spacing: -0.3px;
  }

  @media ${viewport[9]} {
    font-size: 0.82em;
    letter-spacing: -0.2px;
    line-height: 1.5;
  }

  @media ${viewport[12]} {
    font-size: 0.92em;
    letter-spacing: 0.3px;
    line-height: 1.5;
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
    font-weight: 300;
    margin-bottom: 1em;
    text-align: left;
  }

  &.card-label,
  &.product-info__price {
    font-size: 0.9em;
    color: #ad343e;
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
    color: #ad343e;
    margin-top: 2.5em;
    font-weight: 700;
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
