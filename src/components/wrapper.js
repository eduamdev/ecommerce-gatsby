import React from "react"
import styled from "styled-components"
import { viewport } from "./breakpoints"
import PropTypes from "prop-types"

const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 90%;
  padding: 0;

  @media ${viewport[4]} {
    padding: 0 0.2rem;
  }

  @media ${viewport[7]} {
    padding: 0 1rem;
  }

  @media ${viewport[9]} {
    max-width: 85%;
  }

  @media ${viewport[12]} {
    max-width: 1420px;
    width: 90%;
    padding-left: 3rem;
    padding-right: 3rem;
  }

  &.type {
    position: relative;
  }
`

const Wrapper = ({ className, children }) => {
  return <StyledWrapper className={className}>{children}</StyledWrapper>
}

Wrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Wrapper
