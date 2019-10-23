import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { viewport } from "./breakpoints"

const Flex = styled.div`
  display: flex;

  &.logo {
    align-items: center;
    justify-content: center;

    & .logo-img {
      width: 54px;
      height: 54px;
      margin-right: 10px;
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
      height: 22px;
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
      fill: rgb(187, 120, 120);
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
