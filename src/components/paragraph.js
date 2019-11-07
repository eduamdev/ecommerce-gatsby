import React from "react"
import styled from "styled-components"
import { viewport } from "./breakpoints"
import PropTypes from "prop-types"

const StyledParagraph = styled.p`
  font-size: 14px;
  line-height: 20px;
  word-spacing: normal;
  margin: 0;
  letter-spacing: 0.3px;
  border: none;
  outline: none;
  margin-bottom: 1.45rem;

  @media ${viewport[9]} {
    font-size: 16px;
    line-height: 26px;
  }

  @media ${viewport[9]} {
    line-height: 24px;
    letter-spacing: normal;
  }

  @media ${viewport[12]} {
    font-size: 16.5px;
    line-height: 1.5;
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
