import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { viewport } from "./breakpoints"

const Flex = styled.div`
  display: flex;

  &.announcement-bar {
    align-items: center;
    justify-content: center;
    color: aliceblue;
    padding: 0.5em 0;
    background: #000;

    & p {
      margin: 0;
      font-weight: 400;
      font-size: 0.8em;
      letter-spacing: 0.5px;
    }
  }

  &.logo {
    align-items: center;
    justify-content: center;

    & .logo-img {
      width: 48px;
      height: 48px;
      margin-right: 10px;
      display: none;

      @media ${viewport[7]} {
        width: 50px;
        height: 50px;
        display: block;
      }
    }

    & .logo-text {
      margin-bottom: 0;
      letter-spacing: 0.25px;
      color: #000;
      font-size: 16px;
      text-transform: uppercase;
      font-weight: 900;

      @media ${viewport[9]} {
        font-size: 18px;
      }
    }
  }

  &.product-star-rating {
    & svg {
      height: 20px;
    }
  }

  &.filter {
    align-items: center;
    justify-content: center;
    padding: 0.5em 1em;
    cursor: pointer;

    &:active,
    &:focus,
    &:hover {
      background-color: rgb(237, 237, 240);
    }
  }

  &.featured {
    align-items: baseline;

    & span {
      fill: #0277bd;
      width: 20px;
      margin-left: 10px;
    }
  }

  &.payment-svg {
    /* fill: #717171; */
  }
`

const FlexContainer = ({ className, style, children, onClick }) => {
  return (
    <Flex className={className} onClick={onClick} style={style}>
      {children}
    </Flex>
  )
}

Flex.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

export default FlexContainer
