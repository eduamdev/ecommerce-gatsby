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
  }

  &.category,
  &.shoemaking {
    width: 100%;

    @media ${viewport[9]} {
      width: 80%;
    }

    @media ${viewport[12]} {
      width: 60%;
    }
  }

  &.category {
    position: relative;
  }

  &.cartProcess {
    max-width: 100%;
    width: 100%;
    margin: 0;
    padding: 0;

    @media ${viewport[7]} {
      padding: 0 1rem;
      max-width: 90%;
      width: 90%;
      margin: 0 auto;
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
