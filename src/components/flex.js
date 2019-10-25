import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { viewport } from "./breakpoints"

const Flex = styled.div`
  display: flex;

  &.announcement-bar {
    align-items: center;
    justify-content: center;
    color: #fff;
    fill: #fff;
    padding: 0.35em 0;
    background: #00416a; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #e4e5e6,
      #00416a
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #e4e5e6,
      #00416a
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    & span {
      width: 18px;
      margin-right: 10px;

      & svg {
        width: 100%;
      }
    }

    & p {
      margin: 0;
      font-weight: 300;
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

      @media ${viewport[7]} {
        width: 54px;
        height: 54px;
      }
    }

    & .logo-text {
      display: none;

      @media ${viewport[7]} {
        display: inherit;
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
      fill: #2b5061;
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
