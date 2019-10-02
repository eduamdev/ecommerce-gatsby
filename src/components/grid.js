import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Grid = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;

  &.header {
    grid-template-columns: max-content 2.5em max-content 1fr 1.35em;
    grid-template-areas: "title . nav . svg";

    & .header {
      grid-area: title;
    }

    & nav {
      grid-area: nav;
    }

    & svg {
      grid-area: svg;
      padding-left: 2em;
    }
  }

  &.category {
    align-items: stretch;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
  }
`

const GridContainer = ({ className, children }) => {
  return <Grid className={className}>{children}</Grid>
}

Grid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default GridContainer
