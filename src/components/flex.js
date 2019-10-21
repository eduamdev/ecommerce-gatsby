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
    align-items: flex-end;
    justify-content: center;
    padding: 0.5em 1em;
    cursor: pointer;

    &:active,
    &:focus,
    &:hover {
      background-color: rgb(237, 237, 240);
    }
  }

  &.cartProcess {
    padding: 0.25em 0.1em;
    border-bottom: 3px solid transparent;
    flex-direction: column;

    & .step {
      font-weight: 900;
      font-size: 1.6em;
      margin: 0.5em 0;
      /* color: #bb7878; */
    }

    & .process {
      margin: 0;
      letter-spacing: -0.5px;
      font-size: 0.875em;

      @media ${viewport[4]} {
        font-size: 0.9em;
      }

      @media ${viewport[7]} {
        font-size: 1em;
      }
    }

    &.active {
      border-bottom-color: #000;

      & .process {
        font-weight: 700;
      }
    }

    @media ${viewport[7]} {
      padding: 0.5em;
    }
  }

  &.payment-svg {
    fill: #a7a7a7;
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
