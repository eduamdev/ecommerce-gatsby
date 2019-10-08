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

  &.banner {
    position: absolute;
    left: 10%;
    bottom: 2%;
    max-width: 60%;
    text-align: left;
    font-size: 0.625em;
    line-height: 1.3;

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
    margin-bottom: 1em;
  }

  &.card-label,
  &.product-info__price {
    font-weight: 900;
    font-size: 0.9em;
    color: rgb(187, 120, 120);
  }

  &.card-label {
    letter-spacing: -0.2px;
    margin-bottom: 0.2em;

    @media ${viewport[7]} {
      font-size: 1em;
    }

    @media ${viewport[12]} {
      font-size: 1.1em;
    }
  }

  &.product-info__price {
    margin: 0.5em 0;
    font-size: 1.1em;
    letter-spacing: -0.5px;

    @media ${viewport[7]} {
      font-size: 1.2em;
    }

    @media ${viewport[12]} {
      font-size: 1.35em;
    }
  }

  &.quantity {
    margin-top: 1.25em;
    margin-bottom: 1.25em;
    display: grid;
    grid-template-columns: max-content max-content max-content;

    & .update-num {
      font-weight: 200;
      font-size: 1.7em;
      padding: 0 0.6em;
      border: 0;
      background: rgb(245, 245, 245);
      width: 3rem;
      height: 3rem;
      cursor: pointer;
    }

    & input {
      outline: none;
      font-size: 1.1em;
      font-weight: 700;
      padding: 0 0 0 0.75em;
      width: 3rem;
      height: 3rem;
      border: none;
      line-height: 1.3;
      appearance: none;
      margin: 0;
    }
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
