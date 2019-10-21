import React from "react"
import styled from "styled-components"
import { viewport } from "./breakpoints"
import PropTypes from "prop-types"

const StyledSection = styled.section`
  margin: 0;
  padding: 2.25em 0;
  background: #fff;

  @media ${viewport[7]} {
    padding: 3em 0;
  }

  &.banner {
    position: relative;

    & div {
      max-height: 550px;
    }
  }

  &.featured {
    background: linear-gradient(#f7f4f5 0%, #fff 30%);
  }

  &.rack {
    margin-bottom: 2em;
    padding-bottom: 5em;
    padding-top: 0;

    @media ${viewport[9]} {
      padding: 0 0 3em 0;
    }
  }

  &.payment {
    background: rgb(245, 245, 245);
  }

  &.products,
  &.filter,
  &.banner {
    padding: 0;
  }
`

const Section = ({ id, className, style, children }) => {
  return (
    <StyledSection id={id} className={className} style={style}>
      {children}
    </StyledSection>
  )
}

Section.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
}

export default Section
