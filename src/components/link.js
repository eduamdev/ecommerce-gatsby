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

  &.nav {
    font-weight: 500;
    letter-spacing: 0.2px;
    font-size: 0.95em;

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

    & .svg {
      fill: #fff;
      width: 0.85em;
      height: auto;
      margin-left: 4px;

      @media ${viewport[7]} {
        width: 1em;
      }
    }
  }

  &.featured {
    border-bottom: 1px solid;
    color: rgb(187, 120, 120);
    margin-top: 1.75em;
    margin-bottom: 3em;

    &:hover {
      border-color: transparent;
    }
  }

  &.cart,
  &.error,
  &.addToCart,
  &.pay {
    display: inline-block;
    /* border: 1px solid; */
    background: rgb(187, 120, 120);
    color: #fff;
    padding: 0.75em 1.2em;
    border-radius: 2px;

    &:hover {
      /* background: transparent; */
      /* color: rgb(187, 120, 120); */
      background: rgb(146, 93, 93);
    }
  }

  &.pay {
    width: 100%;
    margin: 1em auto 0 auto;
    text-align: center;

    @media ${viewport[7]} {
      width: 80%;
    }

    @media ${viewport[12]} {
      width: 60%;
    }
  }

  &.cart,
  &.error {
    margin-top: 1.75em;
    margin-bottom: 3em;
  }

  &.card-image {
    padding: 0.25em;
    height: 100%;
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
