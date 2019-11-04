import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { viewport } from "./breakpoints"

// Default
const MIN_FONT_SIZE_EM = 1.55

function getHeadingFontSize(rank, minFontSize, ratio = 1) {
  switch (rank) {
    case 1:
      return minFontSize

    case 2:
      return minFontSize * (ratio / 1.4)

    case 3:
      return minFontSize * (ratio / 1.7)

    case 4:
      return minFontSize * (ratio / 1.9)

    case 5:
      return minFontSize * (ratio / 2.15)

    case 6:
      return minFontSize * (ratio / 2.3)

    default:
      return minFontSize
  }
}

const StyledHeading = styled.div`
  margin: 0;
  padding: 0;
  text-rendering: optimizeLegibility;
  color: inherit;
  text-align: left;
  font-weight: bold;
  line-height: ${({ rank }) => (rank > 3 ? "1.25" : "1.1")};
  font-size: ${({ rank }) =>
    getHeadingFontSize(rank, MIN_FONT_SIZE_EM, 0.95)}em;

  /* Styles based on viewport size */
  @media ${viewport[7]} {
    font-size: ${({ rank }) =>
      getHeadingFontSize(rank, MIN_FONT_SIZE_EM * 1.2, 0.85)}em;
  }

  @media ${viewport[9]} {
    font-size: ${({ rank }) =>
      getHeadingFontSize(rank, MIN_FONT_SIZE_EM * 1.4, 0.7)}em;
  }

  @media ${viewport[12]} {
    font-size: ${({ rank }) =>
      getHeadingFontSize(rank, MIN_FONT_SIZE_EM * 1.85, 0.6)}em;
  }
`

const Heading = ({ rank = 2, className, children }) => {
  if (rank <= 0) return <></>
  rank = rank > 6 ? 6 : rank

  return (
    <StyledHeading as={`h${rank}`} className={className} rank={rank}>
      {children}
    </StyledHeading>
  )
}

Heading.propTypes = {
  rank: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Heading
