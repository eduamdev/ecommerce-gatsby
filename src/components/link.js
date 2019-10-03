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
  }

  &.category {
    display: flex;
    align-items: center;
    justify-content: center;

    & .svg {
      fill: #fff;
      width: 23px;
      height: 23px;
    }
  }

  &.featured {
    margin-top: 1.75em;
    border: 1px solid;
    background: rgb(187, 120, 120);
    color: #fff;
    padding: 0.5em 1em;

    &:hover {
      background: transparent;
      color: rgb(187, 120, 120);
    }
  }

  &.card-image {
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
  className: PropTypes.string.isRequired,
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
