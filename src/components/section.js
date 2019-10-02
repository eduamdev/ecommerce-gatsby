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
    padding: 0;
    /* max-height: 550px; */
    /* background-image: url("https://images.unsplash.com/photo-1489345745021-740d36bbda21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"); */
    /* background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 550px; */

    & div {
      max-height: 700px;
    }
  }
`

const Section = ({ id, className, children }) => {
  return (
    <StyledSection id={id} className={className}>
      {children}
    </StyledSection>
  )
}

Section.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Section
