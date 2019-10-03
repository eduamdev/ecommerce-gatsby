import React from "react"
import styled from "styled-components"
import { viewport } from "./breakpoints"
import PropTypes from "prop-types"

const StyledParagraph = styled.p`
  font-size: 1em;
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
    font-size: 0.95em;
    line-height: 1.4;
    letter-spacing: -0.3px;
  }

  @media ${viewport[9]} {
    font-size: 0.92em;
    letter-spacing: -0.2px;
    line-height: 1.5;
  }

  @media ${viewport[12]} {
    letter-spacing: 0.3px;
    line-height: 1.5;
    font-weight: 400;
  }

  &.card-label {
    font-weight: 500;
    font-size: 1.05em;
    color: rgb(187, 120, 120);
    letter-spacing: 1.5px;

    @media ${viewport[7]} {
      font-size: 1em;
    }

    @media ${viewport[12]} {
      font-size: 1.1em;
    }
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
