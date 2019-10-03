import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { viewport } from "./breakpoints"

const Grid = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;

  &.header {
    grid-template-columns: max-content 2.5em max-content 1fr 1.5em;
    grid-template-areas: "title . nav . svg";

    & .header {
      grid-area: title;
    }

    & nav {
      grid-area: nav;
    }

    & .svg {
      grid-area: svg;

      &:hover{
        fill: rgb(187,120,120);
      }
      /* padding-left: 2em; */
    }
  }

  &.category {
    align-items: stretch;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
  }

  &.featured {
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5em;

    /* @media ${viewport[4]} {
      grid-template-columns: 1fr 1fr;
    } */

    @media ${viewport[7]} {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media ${viewport[12]} {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  &.card {
    justify-content: stretch;
    background: #fff;
    border: 1px solid #ddd;
    text-align: center;

    &:hover {
      border-color: rgb(187, 120, 120);
    }
  }

  &.shoemaking{
    grid-template-columns: 1.2fr 1fr;

    @media ${viewport[7]}{
      grid-template-columns: 1fr 1.2fr;
    }

    & .text{
      justify-self: end;
      text-align: right;
    }
  }

  &.footer {
    align-items: start;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "newsletter newsletter"
      "store orders"
      "social .";
    grid-row-gap: 3em;
    grid-column-gap: 1em;

    @media ${viewport[7]} {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas:
        "newsletter newsletter newsletter"
        "store orders social";
    }

    @media ${viewport[9]} {
      grid-column-gap: 3em;
      grid-template-columns: 1.7fr 1fr 1fr 0.7fr;
      grid-template-areas: "newsletter store orders social";
    }

    & .newsletter {
      grid-area: newsletter;
    }

    & .store {
      grid-area: store;
    }

    & .order {
      grid-area: orders;
    }

    & .social {
      grid-area: social;
    }
  }

  &.payment {
    grid-template-columns: 1fr max-content 2em max-content 1fr;
    grid-template-areas: ". paypal . visa .";

    & .paypal {
      grid-area: paypal;
    }

    & .visa {
      grid-area: visa;

      & svg {
        width: 54px;

        @media ${viewport[7]} {
          width: 65px;
        }
      }
    }

    & span svg {
      max-height: 32px;

      @media ${viewport[7]} {
        max-height: 48px;
      }
    }
  }

  &.cartProcess{
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    background: rgb(245,245,245);
    align-items: stretch;

    & article{
      padding: 2em 0.5em;
      border-bottom: 1px solid transparent;

      &.active{
        border-bottom-color: rgb(187,120,120);

        & p{
          font-weight: 700;
        }
      }
    }
  }

  &.cartInfo{
    text-align: center;
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
