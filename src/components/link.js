import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { viewport } from "./breakpoints"

const GatsbyLink = styled(Link)`
  margin: 0;
  padding: 0;
  text-decoration: none;
  background: transparent;
  color: inherit;
  outline: none;

  &.logo {
    padding: 0.5em;
  }

  &.nav {
    font-weight: 500;
    letter-spacing: 0.2px;
    font-size: 0.95em;
    padding: 0.75em;

    @media ${viewport[4]} {
      font-size: 0.9em;
    }

    @media ${viewport[7]} {
      font-size: 0.8;
    }

    @media ${viewport[9]} {
      font-size: 0.92em;
    }

    &:hover {
      color: rgb(187, 120, 120);
    }
  }

  &.header-cart {
    & svg {
      vertical-align: middle;
    }
  }

  &.category-img {
    position: relative;
    /* border: 1px solid #ddd;

    &:hover {
      border-color: rgb(187, 120, 120);
    } */
  }

  &.category {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 5%;
    color: #fff;
    text-decoration: none;
    margin: 0;

    &.men {
      right: 10%;
    }

    &.women {
      left: 10%;
    }

    & span:not(.icon) {
      border-bottom: 1px solid #fff;
      font-weight: 700;
      letter-spacing: 0.8px;
    }

    & .icon {
      fill: #fff;
      width: 0.85em;
      height: auto;
      margin-left: 4px;

      @media ${viewport[7]} {
        width: 1em;
      }
    }
  }

  &.cart,
  &.error {
    display: inline-block;
    /* border: 1px solid; */
    background: rgb(187, 120, 120);
    color: #fff;
    padding: 0.75em 1.2em;
    border-radius: 2px;
    margin-top: 1.75em;
    margin-bottom: 1.75em;

    &:hover {
      /* background: transparent; */
      /* color: rgb(187, 120, 120); */
      background: rgb(146, 93, 93);
    }
  }

  &.card-image {
    padding: 0 0.5em;
    height: 100%;

    @media ${viewport[12]} {
      padding: 0 0.75em;
    }
  }
`

const AnchorLink = styled.a`
  margin: 0;
  padding: 0;
  text-decoration: none;
  background: transparent;
  color: inherit;
  font-weight: 700;
  outline: none;
`

const LinkUp = ({
  className,
  style,
  type,
  url,
  target,
  ariaLabel,
  children,
}) => {
  if (type.toLowerCase() === "internal") {
    return (
      <GatsbyLink
        className={className}
        style={style}
        to={url}
        aria-label={ariaLabel}
      >
        {children}
      </GatsbyLink>
    )
  } else if (type.toLowerCase() === "external") {
    return (
      <AnchorLink
        className={className}
        style={style}
        href={url}
        target={target}
        aria-label={ariaLabel}
        rel="noreferrer noopener nofollow"
      >
        {children}
      </AnchorLink>
    )
  } else {
    return <></>
  }
}

LinkUp.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  target: PropTypes.string,
  children: PropTypes.node.isRequired,
  ariaLabel: PropTypes.string.isRequired,
}

LinkUp.defaultProps = {
  target: `_blank`,
}

export default LinkUp
