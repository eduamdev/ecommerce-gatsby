import React from "react"
import styled from "styled-components"
import { viewport } from "./breakpoints"
import PropTypes from "prop-types"

const StyledSection = styled.section`
  margin: 0;
  padding: 1.5em 0;
  background: #fff;

  @media ${viewport[7]} {
    padding: 2em 0;
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
    background: rgba(238, 238, 248, 0.3);

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

  &.footer-links {
    background: #0f2027; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #2c5364,
      #203a43,
      #0f2027
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #2c5364,
      #203a43,
      #0f2027
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    padding: 3em 0;
    color: aliceblue;
    fill: aliceblue;
  }

  &.footer-payment {
    fill: aliceblue;
    background: #2b5061;
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
