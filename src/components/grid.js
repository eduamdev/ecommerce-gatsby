import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { viewport } from "./breakpoints"

const Grid = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;

  &.header {
    grid-template-columns: max-content 1em max-content 1fr max-content;
    grid-template-areas: "title . nav . svg";

    @media ${viewport[7]} {
      grid-template-columns: max-content 2.5em max-content 1fr max-content;
    }

    & .header {
      grid-area: title;
    }

    & nav {
      grid-area: nav;
    }

    & .header-cart {
      grid-area: svg;
      position: relative;

      &.badge:after {
        content: "";
        position: absolute;
        top: -4px;
        right: -6px;
        height: 10px;
        width: 10px;
        background: tomato;
        border-radius: 100%;
      }

      & svg {
        width: 1.6em;
      }
    }
  }

  &.articles {
    align-items: stretch;
    grid-template-columns: 1fr;
    grid-gap: 2em 1.75em;
    margin-bottom: 1em;
    border-radius: 4px;

    @media ${viewport[7]} {
      grid-template-columns: 1fr 1fr 1fr;
    }

    & .article {
      &:hover .article-text {
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
      }

      & .article-img {
      }

      & .article-text {
        padding: 1.2em;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);

        & span {
          font-size: 0.675em;
          text-transform: uppercase;
          font-weight: 300;
          letter-spacing: 2px;
        }

        & .article-title {
          font-weight: 500;
          letter-spacing: 0.2px;
          line-height: 1.55;
          margin: 0.7em 0 0 0;
          font-size: 0.9em;
          color: #000;
        }
      }
    }
  }

  &.featured {
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.75em;

    @media ${viewport[7]} {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media ${viewport[9]} {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 1em;
    }
  }

  &.card {
    height: 100%;
    justify-content: stretch;
    background: #fff;
    border-top: 1px solid #ddd;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
    text-align: center;
    transition: all 0.15s;
    border-radius: 4px;
    position: relative;

    &:hover {
      transform: translate(1px, -2%);
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
    grid-template-columns: 1fr max-content 1fr;
    grid-template-areas: ". svg .";

    & .payment-svg {
      grid-area: svg;
      height: 42px;

      @media ${viewport[7]} {
        height: 48px;
      }

      @media ${viewport[12]} {
        height: 52px;
      }

      & span {
        &:not(:first-child) {
          margin-left: 10px;
        }

        & svg {
          width: 42px;
          height: 42px;

          @media ${viewport[7]} {
            width: 48px;
            height: 48px;
          }

          @media ${viewport[12]} {
            width: 52px;
            height: 52px;
          }
        }
      }
    }
  }

  &.cartInfo,
  &.error {
    text-align: center;
    margin-top: 0.5em;
  }

  &.checkout {
    grid-template-columns: 1fr;
    grid-row-gap: 1.5em;
    grid-template-areas:
      "summary"
      "payment";

    & .payment {
      grid-area: payment;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
      border-top: 1px solid #eee;
      padding: 2em 1.25em;

      @media ${viewport[7]} {
        align-self: start;
        padding-top: 2em;
        padding: 2em;
      }
    }

    & .summary {
      grid-area: summary;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
      border-top: 1px solid #eee;
      padding: 2em 1.25em;

      @media ${viewport[7]} {
        align-self: start;
      }

      @media ${viewport[9]} {
        padding: 2em;
      }
    }

    @media ${viewport[7]} {
      grid-template-columns: 1fr 1fr;
      grid-template-columns: minmax(min-content, 600px) 1fr minmax(min-content, 500px);
      grid-template-areas: "payment . summary";
      grid-column-gap: 1em;
    }
  }

  &.order-summary {
    margin-top: 1em;
    grid-template-columns: max-content 2fr 1fr 1fr;
    grid-column-gap: 1em;
    grid-template-areas: "img info price total";

    & .order-summary__img {
      grid-area: img;
      width: 60px;

      @media ${viewport[12]} {
        width: 80px;
      }
    }

    & .order-summary__info {
      grid-area: info;
      align-self: baseline;

      & h4 {
        margin-bottom: 0.75em;
        line-height: 1.15;
      }

      & span {
        font-size: 0.8em;
        line-height: 1.5;
        display: block;
      }
    }

    & .order-summary__price {
      grid-area: price;
      align-self: center;
      font-size: 0.85em;
      text-align: right;
    }

    & .order-summary__total {
      grid-area: total;
      align-self: center;
      color: rgb(187, 120, 120);
      font-weight: 700;
      font-size: 0.85em;
      text-align: right;
    }
  }

  &.order-amount {
    padding-top: 3em;
    grid-template-columns: 1fr 1fr;

    @media ${viewport[7]} {
      padding-top: 1.5em;
    }

    & .left {
      justify-self: start;
      margin-bottom: 0.35em;
      font-size: 0.9em;
    }

    & .right {
      justify-self: end;
      margin-bottom: 0.35em;
      font-size: 0.9em;
    }

    & .subtotal,
    & .shipping {
      color: rgb(187, 120, 120);
      font-weight: 700;
    }

    & .shipping {
      font-size: 0.85em;
    }

    & .total {
      justify-self: stretch;
      align-self: start;
      font-size: 1.25em;
      margin-top: 0.35em;
      padding-top: 1em;
      border-top: 1px solid #ddd;
      color: rgb(146, 93, 93);
      font-weight: 900;

      @media ${viewport[7]} {
        margin-top: 0.5em;
        padding-top: 1.5em;
      }
    }
  }

  &.payment-details {
    grid-template-columns: 1fr;

    & .details {
      align-self: start;
      justify-self: start;
      width: 100%;

      /* @media ${viewport[9]} {
        width: 80%;
        max-width: 600px;
      }

      @media ${viewport[12]} {
        width: 80%;
      } */

      & .email-input {
        font-size: 0.9em;
        outline: none;
      }

      & .email-input,
      & .creditCard-input,
      .wc-stripe-elements-field {
        width: 100%;
        padding: 0.75rem;
        margin: 0;
        border: 1px solid #ddd;
        border-radius: 4px;
        line-height: 0;
        font-size: 17px;
      }

      & .email-label,
      & .creditCard-label {
        font-weight: 700;
        font-size: 0.8em;
        display: block;
        margin-bottom: 0;
      }

      & .creditCard-label {
        margin-top: 1.5em;
      }

      & .card-errors {
        color: tomato;
        font-weight: 500;
        font-size: 0.85em;
        letter-spacing: 0.2px;
        padding-top: 6px;
      }
    }
  }

  &.product {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "image image"
      "info info"
      "details details"
      "reviews reviews";
    grid-gap: 1em 2em;

    @media ${viewport[4]} {
      grid-template-columns: 1fr 1fr;
    }

    @media ${viewport[7]} {
      grid-template-columns: 1fr 1.2fr;
      grid-template-areas:
        "image info"
        "image details"
        "reviews reviews";
      grid-gap: 2em;
    }

    @media ${viewport[12]} {
      grid-template-columns: 1fr 1.55fr;
    }

    & .product-image {
      grid-area: image;
      align-self: start;
      padding: 0 1em;
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    & .product-info {
      grid-area: info;
      align-self: start;
      padding-bottom: 1.5em;
    }

    & .product-details {
      grid-area: details;
      border-top: 1px solid #ddd;
      padding-top: 2em;

      @media ${viewport[7]} {
        padding-top: 2.2em;
      }
    }

    & .product-reviews {
      grid-area: reviews;
    }

    & .product-info,
    & .product-details,
    & .product-reviews {
      background: #fff;
      padding: 2em;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
      /* border: 1px solid #ddd; */
      /* box-shadow: #ddd 3px 3px 13px 3px; */
    }
  }

  &.productContainer {
    grid-template-columns: 1fr;
    grid-template-areas:
      "filter"
      "products";
    align-items: start;
    grid-gap: 1em;

    & .filter {
      grid-area: filter;

      & .filter-range {
        width: 300px;
        margin: 0.35em auto 1em auto;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas:
          "slider slider slider"
          "min . max";
        grid-row-gap: 0.35em;
        visibility: hidden;
        height: 0;
        opacity: 0;
        transition: all 0.1s;

        &.show {
          visibility: visible;
          height: initial;
          opacity: 1;
        }

        & .slider {
          grid-area: slider;
        }

        & .min {
          grid-area: min;
        }

        & .max {
          grid-area: max;
          justify-self: end;
        }
      }
    }

    & .products {
      grid-area: products;

      & .productList {
        display: grid;
        align-items: stretch;
        grid-gap: 0.75em;
        grid-template-columns: 1fr 1fr;

        @media ${viewport[7]} {
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 1em 0.5em;
        }

        @media ${viewport[9]} {
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-gap: 1.5em;
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
