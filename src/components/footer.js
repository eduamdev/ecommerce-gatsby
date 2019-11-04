import React from "react"
import Section from "./section"
import Wrapper from "./wrapper"
import Grid from "./grid"
import Heading from "./heading"
import P from "./paragraph"
import styled from "styled-components"
import Flex from "./flex"
import { Facebook, Instagram } from "./svg"
import { viewport } from "./breakpoints"

const StyledSection = styled(Section)`
  &.footer-links {
    background: #eee;
    padding: 4em 0;

    & .footer-links__wrapper {
      & .footer-links__wrapper__grid {
        @media ${viewport[7]} {
          padding: 2em;
        }
        & .footer-links__wrapper__grid__heading {
          margin-bottom: 1em;
          font-weight: 500;
        }

        & .footer-links__wrapper__grid__input {
          width: 100%;
          padding: 0.75em 1em;
          border: none;
          outline: none;
          letter-spacing: 1px;
          border-radius: 2px;
          font-size: 0.85em;
        }

        & .footer-links__wrapper__grid__list {
          margin: 0;
          list-style: none;

          & li {
            margin-bottom: 0.5em;

            & p {
              font-weight: 300;
            }
          }
        }
      }
    }
  }

  &.footer-author {
    border-top: 1px solid #ddd;
    padding: 4em 0;

    @media ${viewport[7]} {
      padding: 3em 0;
    }
    & .footer-author__text {
      font-family: "Poppins", sans-serif;
      text-align: center;
      letter-spacing: 0.5px;
      font-weight: 400;
      font-size: 0.85em;
    }
  }
`

const Footer = () => {
  return (
    <footer>
      <StyledSection className="footer-links">
        <Wrapper className="footer-links__wrapper">
          <Grid className="footer-links__wrapper__grid footer">
            <div className="newsletter">
              <Heading
                rank={3}
                className="footer-links__wrapper__grid__heading"
              >
                Sign Up to Our Newsletter
              </Heading>
              <input
                className="footer-links__wrapper__grid__input"
                type="text"
                placeholder="ENTER YOUR EMAIL"
              />
            </div>
            <div className="store">
              <Heading
                rank={3}
                className="footer-links__wrapper__grid__heading"
              >
                Store
              </Heading>
              <ul className="footer-links__wrapper__grid__list">
                <li>
                  <P>Contact Us</P>
                </li>
                <li>
                  <P>Our Store</P>
                </li>
                <li>
                  <P>About Us</P>
                </li>
              </ul>
            </div>
            <div className="orders">
              <Heading
                rank={3}
                className="footer-links__wrapper__grid__heading"
              >
                Orders
              </Heading>
              <ul className="footer-links__wrapper__grid__list">
                <li>
                  <P>Delivery & Returns</P>
                </li>
                <li>
                  <P>My Account</P>
                </li>
                <li>
                  <P>Collect In Store</P>
                </li>
                <li>
                  <P>FAQ</P>
                </li>
              </ul>
            </div>
            <div className="social">
              <Heading
                rank={3}
                className="footer-links__wrapper__grid__heading"
              >
                Social
              </Heading>
              <Flex>
                <span style={{ width: `24px`, marginRight: `0.5em` }}>
                  {Facebook}
                </span>
                <span style={{ width: `24px` }}>{Instagram}</span>
              </Flex>
            </div>
          </Grid>
        </Wrapper>
      </StyledSection>
      <StyledSection className="footer-author">
        <Wrapper>
          <P className="footer-author__text">
            Design & built by Eduardo Rodriguez,{" "}
            <a
              href="https://twitter.com/edroamz"
              target="_blank"
              rel="noreferrer noopener nofollow"
              aria-label="twitter account"
            >
              twitter
            </a>{" "}
            &{" "}
            <a
              href="https://github.com/edroamz"
              target="_blank"
              rel="noreferrer noopener nofollow"
              aria-label="github account"
            >
              github
            </a>
          </P>

          <P style={{ textAlign: "center", margin: 0 }}>
            <small>
              This site is built with{" "}
              <a
                href="https://gatsbyjs.org/"
                target="_blank"
                rel="noreferrer noopener nofollow"
                aria-label="gatsbyjs"
              >
                Gatsby
              </a>
              ,{" "}
              <a
                href="https://stripe.com/"
                target="_blank"
                rel="noreferrer noopener nofollow"
                aria-label="stripe"
              >
                Stripe
              </a>{" "}
              &{" "}
              <a
                href="https://www.netlify.com/"
                target="_blank"
                rel="noreferrer noopener nofollow"
                aria-label="netlify"
              >
                Netlify
              </a>{" "}
              functions.
            </small>
          </P>
        </Wrapper>
      </StyledSection>
    </footer>
  )
}

export default Footer
