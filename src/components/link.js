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
    padding-left: 0;
  }

  &.nav {
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 0.725em;
    padding: 0.75em;
    text-transform: uppercase;

    @media ${viewport[9]} {
      font-size: 0.75em;
    }

    &:hover {
      color: #2b5061;
    }
  }

  &.header-cart {
    position: relative;
    width: 20px;

    @media ${viewport[9]} {
      width: 22px;
    }

    &.badge:after {
      content: "";
      position: absolute;
      top: -3px;
      right: -6px;
      height: 8px;
      width: 8px;
      background: #ed1c24;
      border-radius: 100%;

      @media ${viewport[7]} {
        top: -4px;
      }
    }

    & svg {
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
  }

  &.cart,
  &.error {
    display: inline-block;
    /* border: 1px solid; */
    background: #3e2723;
    color: #fff;
    padding: 0.75em 1.2em;
    border-radius: 2px;
    margin-top: 1.75em;
    margin-bottom: 1.75em;
    font-size: 0.9em;
    letter-spacing: 0.5px;

    &:hover {
      /* background: transparent; */
      /* color: rgb(187, 120, 120); */
      /* background: rgb(146, 93, 93); */
      background: #1b0000;
    }
  }

  &.card-image {
    height: 100%;
    padding: 0.75em 1em;
    /* width: 100%;
    position: absolute; */

    @media ${viewport[12]} {
      padding: 1em 1.5em;
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
  title,
  children,
}) => {
  if (type.toLowerCase() === "internal") {
    return (
      <GatsbyLink
        className={className}
        style={style}
        to={url}
        aria-label={ariaLabel}
        title={title}
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
        title={title}
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
  title: PropTypes.string,
}

LinkUp.defaultProps = {
  target: `_blank`,
}

export default LinkUp
