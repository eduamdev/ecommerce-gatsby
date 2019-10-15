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

    & .header-cart {
      grid-area: svg;
      position: relative;

      &.badge:after{
        content: '';
        position: absolute;
        top: -4px;
        right: -6px;
        height: 10px;
        width: 10px;
        background: tomato;
        border-radius: 100%;
      }
    }
  }

  &.category {
    align-items: stretch;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5em;
    grid-template-areas: "rack rack"
    "women men";
    margin-bottom: 1em;

    @media ${viewport[9]} {
      grid-gap: 1em;
    }

    & .women{
      grid-area: women;
    }

    & .men{
      grid-area: men;
    }

    & .rack {
      grid-area: rack;
    }
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
    height: 100%;
    justify-content: stretch;
    background: #fff;
    border: 1px solid #eee;
    text-align: center;
    transition:  all 0.1s;
    box-shadow: 1px 3px 30px 5px #f5f5f5;

    &:hover {
      /* border-color: rgb(187, 120, 120); */
      border-color: rgb(195, 186, 186);
      /* border: transparent; */
      transform:translate(1px, -1%);
      box-shadow: none;
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
    /* background: rgb(245,245,245); */
    align-items: stretch;
    background-color: rgb(245, 245, 245);
  }

  &.cartInfo, &.error{
    text-align: center;
  }

  &.payment-details{
    margin: 5em 0 0 0;
    grid-template-columns: 1fr;
    grid-template-areas: "details" 
    "amount";
    grid-column-gap: 3em;
    grid-row-gap: 5em;

    @media ${viewport[7]}{
      margin: 5em 0 0 0;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "details amount";
    }

    & .details{
      grid-area: details;

      & .email-label{
        font-weight: 700;
        display: block;
        margin-bottom: 0.5em;
      }

      & .email-input, & .creditCard-input{
        width: 100%; 
        padding: 0.25em 1em;
        border: 1px solid #ddd;
      }

      & .creditCard-label{
        font-weight: 700;
        display: block;
        margin-bottom: 0.5em;
        margin-top: 1em;
      }

      & .creditCard-note{
        font-size: 0.7em;
        line-height: 1.25;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        display: block;
        letter-spacing: 0.2px;
        color: #888;
        /* font-style: italic; */
      }
    }

    & .amount {
      grid-area: amount;
      align-self: end;
      display: grid;
      align-items: center;
      justify-content: center;
      grid-template-columns: 1fr;
      grid-template-areas: "subtotal"
      "total";

      & .subtotal{
        grid-area: subtotal;
        display: grid;
        align-items: center;
        justify-content: center;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 3em;
        grid-row-gap: 0.3em;
        padding: 0.5em 0 0.5em 0;
        align-self: stretch;

        @media ${viewport[7]}{
          width: 80%;
          margin: 0 auto;
        }

        @media ${viewport[7]} {
          width: 60%;
        }

        & h4{
          justify-self: end;
          margin: 0;
          font-size: 0.9em;
        }

        & p{
          margin: 0;
        }
      }

      & .total{
        grid-area: total;
        display: grid;
        align-items: center;
        justify-content: center;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 3em;
        padding: 1em 0 1em 0;
        align-self: stretch;
        /* background: #f5f5f5; */
        border-top: 1px solid #ddd;

        @media ${viewport[7]}{
          width: 80%;
          margin: 0 auto;
        }

        @media ${viewport[7]} {
          width: 60%;
        }

        & h4{
          justify-self: end;
          margin: 0;
        }

        & p{
          margin: 0;
          color: rgb(187,120,120);
          font-weight: 700;
          font-size: 1.1em;
        }
      }
    }
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
      grid-template-columns: 1fr 1.2fr;
      grid-column-gap: 2.75em;
      grid-row-gap: 1em;
    }

    @media ${viewport[12]} {
      grid-template-columns: 1fr 1.55fr;
      grid-column-gap: 5em;
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
      align-self: start;
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

  &.productContainer{
    grid-template-columns: 1fr;
    grid-template-areas: "filter"
    "products";
    align-items: start;
    grid-gap: 1em;

    @media ${viewport[7]} {
      /* grid-template-columns: 2.5fr 1fr;
      grid-template-areas: "products filter"; */
    }

    & .filter{
      grid-area: filter;

      & .filter-range{
        width: 300px;
        margin: 1em auto;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: "slider slider slider"
        "min . max";
        grid-row-gap: 0.35em;
        visibility: hidden;
        height: 0;
        opacity: 0;
        transition: all 0.1s;

        &.show{
          visibility: visible;
          height: initial;
          opacity: 1;
        }

        & .slider{
          grid-area: slider;
        }

        & .min{
          grid-area: min;
        }

        & .max{
          grid-area: max;
          justify-self: end;
        }
      }
    }

    & .products{
      grid-area: products;

      & .productList{
        display: grid;
        align-items: stretch;
        grid-gap: 0.5em;
        grid-template-columns: 1fr 1fr;

        @media ${viewport[7]} {
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 1em 0.5em;
        }

        @media ${viewport[9]} {
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
      }
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
