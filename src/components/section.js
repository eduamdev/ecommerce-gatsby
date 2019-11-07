import React from "react"
import styled from "styled-components"
import { viewport } from "./breakpoints"
import PropTypes from "prop-types"

const StyledSection = styled.section`
  margin: 0;
  padding: 2em 0;
  background: #fff;

  @media ${viewport[7]} {
    padding: 3em 0;
  }

  &.banner {
    position: relative;

    & div {
      max-height: 600px;
    }
  }

  &.featured {
    /* background: linear-gradient(#f7f4f5 0%, #fff 70%); */
  }

  &.rack {
    margin-bottom: 2em;
    padding-bottom: 5em;
    padding-top: 0;

    @media ${viewport[9]} {
      padding: 0 0 3em 0;
      margin: 0;
    }
  }

  &.products,
  &.filter,
  &.banner {
    padding: 0;
  }

  &.cart {
    padding: 2em 0;
  }

  &.footer-payment {
    /* fill: aliceblue; */
    /* background: #2b5061; */
    fill: #aaa;
    border-bottom: 1px solid #ccc;
    padding: 1em 0;
    display: none;
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
