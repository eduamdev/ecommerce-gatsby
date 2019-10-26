import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { viewport } from "./breakpoints"

// Default
const MAX_FONT_SIZE_EM = 3.5
const DEF_FONT_WEIGHT = "bold"
const DEF_TEXT_ALIGN = "left"
const DEF_COLOR = "hsla(0, 0%, 0%, 0.8)"

const StyledHeading = styled.div`
  margin: 0;
  padding: 0;
  text-rendering: optimizeLegibility;
  color: ${({ Color }) => (Color ? Color : DEF_COLOR)};
  line-height: ${({ Rank }) => (Rank >= 3 ? "1.5" : "1.25")};
  text-align: ${({ TextAlign }) => (TextAlign ? TextAlign : DEF_TEXT_ALIGN)};
  font-weight: ${({ FontWeight }) =>
    FontWeight ? FontWeight : DEF_FONT_WEIGHT};
  font-size: ${({ Rank }) =>
    MAX_FONT_SIZE_EM / Rank}em; /* <- Dinamic font size */

  /* Styles based on viewport size */
  @media ${viewport[9]} {
    font-size: ${({ Rank }) => (MAX_FONT_SIZE_EM * 1.05) / Rank}em;
  }

  /* Custom classes here */
  &.italic {
    font-style: italic;
  }
`

const Heading = ({
  Rank = 2,
  Type = "headline",
  FontWeight,
  TextAlign,
  Color,
  children,
}) => {
  if (Rank <= 0) return <></>
  Rank = Rank > 6 ? 6 : Rank

  return (
    <StyledHeading
      as={`h${Rank}`}
      className={`heading-${Type}`}
      Rank={Rank}
      FontWeight={FontWeight}
      TextAlign={TextAlign}
      Color={Color}
    >
      {children}
    </StyledHeading>
  )
}

Heading.propTypes = {
  Rank: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node.isRequired,
  Type: PropTypes.oneOf(["headline", "title", "subtitle"]),
  FontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  TextAlign: PropTypes.oneOf(["left", "right", "center", "justify"]),
  Color: PropTypes.string,
}

export default Heading
