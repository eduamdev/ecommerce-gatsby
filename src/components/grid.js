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
    grid-gap: 0.5em;
  }

  &.featured {
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5em;

    /* @media ${viewport[4]} {
      grid-template-columns: 1fr 1fr;
    } */

    @media ${viewport[7]} {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    /* @media ${viewport[12]} {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    } */
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
      padding: 0.75em 0.1em;
      border-bottom: 1px solid transparent;

      & p{
        font-size: 0.875em;

        @media ${viewport[4]}{
          font-size: 0.9em;
        }

        @media ${viewport[7]}{
          font-size: 1em;
        }
      }

      &.active{
        border-bottom-color: rgb(187,120,120);
        background-color: #fff;

        & p{
          font-weight: 700;
        }
      }
      
      @media ${viewport[7]}{
        padding: 2em 0.5em;
      }

    }
  }

  &.cartInfo{
    text-align: center;
  }

  &.product{
    grid-template-columns: 1.2fr 1fr;
    grid-template-areas: "image info"
    "details details"
    "reviews reviews";
    grid-row-gap: 3em;
    grid-column-gap: 0.5em;

    @media ${viewport[4]} {
      grid-template-columns: 1fr 1fr;
    }

    @media ${viewport[7]} {
      grid-column-gap: 2.75em;
      grid-row-gap: 1em;
    }

    @media ${viewport[12]} {
      grid-column-gap: 3em;
      grid-row-gap: 0;
      grid-template-areas: "image info"
    ". details"
    "reviews reviews";
    }

    & .product-image{
      grid-area: image;
    }

    & .product-info{
      grid-area: info;
    }

    & .product-details{
      grid-area: details;
      border-top: 1px solid #ddd;
      padding-top: 2em;

      @media ${viewport[7]} {
        padding-top: 2.2em;
      }
    }

    & .product-reviews{
      grid-area: reviews;
    }
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
