import React from "react"
import styled from "styled-components"
import { viewport } from "./breakpoints"
import PropTypes from "prop-types"

const StyledParagraph = styled.p`
  font-size: 1.075em;
  margin: 0;
  line-height: 1.5;
  border: none;
  outline: none;
  margin-bottom: 1.45rem;

  @media ${viewport[4]} {
    font-size: 0.95em;
    line-height: 1.5;
  }

  @media ${viewport[7]} {
    line-height: 1.4;
    letter-spacing: -0.3px;
  }

  @media ${viewport[9]} {
    font-size: 0.97em;
    letter-spacing: -0.2px;
    line-height: 1.5;
  }

  @media ${viewport[12]} {
    font-size: 1em;
    letter-spacing: 0.3px;
    line-height: 1.5;
    font-weight: 400;
  }
`

const P = ({ className, children, style }) => {
  return (
    <StyledParagraph className={className} style={style}>
      {children}
    </StyledParagraph>
  )
}

P.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
}

export default P
