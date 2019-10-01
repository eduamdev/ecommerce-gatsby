import React from "react"
import styled, { css } from "styled-components"
import { viewport } from "./breakpoints"
import PropTypes from "prop-types"

const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;

  @media ${viewport[7]} {
    grid-template-columns: auto;
  }

  ${props =>
    props.placement === "left" &&
    css`
      justify-content: start;
      text-align: left;
    `}

  ${props =>
    props.placement === "center" &&
    css`
      justify-content: center;
      text-align: center;
    `}

  ${props =>
    props.placement === "right" &&
    css`
      justify-content: end;
      text-align: right;
    `}
`

const StyledTitle = styled.h2`
  display: inline;
  font-size: 1.2em;
  font-weight: 900;
  padding: 0;
  letter-spacing: -0.5px;

  @media ${viewport[7]} {
    font-size: 1.75em;
    letter-spacing: -0.4px;
  }
`

Title.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  placement: PropTypes.string,
}

Title.defaultProps = {
  placement: `left`,
}

export default function Title({ text, className, placement }) {
  return (
    <Container className={className} placement={placement}>
      <StyledTitle className={className}>{text}</StyledTitle>
    </Container>
  )
}
