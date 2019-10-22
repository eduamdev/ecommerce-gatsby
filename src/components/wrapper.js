import React from "react"
import styled from "styled-components"
import { viewport } from "./breakpoints"
import PropTypes from "prop-types"

const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 90%;
  width: 90%;
  padding: 0;

  @media ${viewport[4]} {
    padding: 0 0.2rem;
  }

  @media ${viewport[7]} {
    padding: 0 1rem;
  }

  @media ${viewport[9]} {
    max-width: 85%;
    width: 85%;
  }

  @media ${viewport[12]} {
    max-width: 1420px;
    width: 90%;
    padding-left: 3rem;
    padding-right: 3rem;
  }

  &.header {
    padding: 1.45rem 0;

    max-width: 95%;
    width: 95%;
  }

  &.product {
    /* max-width: 100%;
    width: 100%; */
  }

  &.cart {
    @media ${viewport[7]} {
      padding: 0;
    }

    @media ${viewport[12]} {
      padding-right: 0;
    }
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
