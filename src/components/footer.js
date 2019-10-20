import React from "react"
import Section from "./section"
import Wrapper from "./wrapper"
import Grid from "./grid"
import Title from "./title"
import P from "./paragraph"
import styled from "styled-components"
import { viewport } from "./breakpoints"
import Flex from "./flex"
import {
  Facebook,
  Instagram,
  Visa,
  Paypal,
  Amex,
  MasterCard,
  Stripe,
} from "./svg"

const StyledInput = styled.input`
  width: 100%;
  padding: 0.75em 1em;
  border: none;
  outline: none;
  letter-spacing: 1px;
  font-size: 0.9em;
  border-radius: 2px;
`

const List = styled.ul`
  margin: 0;
  list-style: none;

  & li {
    margin-bottom: 0.25em;

    @media ${viewport[7]} {
      margin-bottom: 0.5em;
    }

    @media ${viewport[9]} {
      margin-bottom: 0.75em;
    }
  }
`

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          backgroundColor: `rgb(245,245,245)`,
          padding: `3em 0`,
          borderBottom: `1px solid #ccc`,
        }}
      >
        <Wrapper>
          <Grid className="footer">
            <div className="newsletter">
              <Title
                className="footer"
                type="h4"
                text="Sign Up to Our Newsletter"
              ></Title>
              <StyledInput type="text" placeholder="ENTER YOUR EMAIL" />
            </div>
            <div className="store">
              <Title className="footer" type="h4" text="Store"></Title>
              <List>
                <li>
                  <P>Contact Us</P>
                </li>
                <li>
                  <P>Our Store</P>
                </li>
                <li>
                  <P>About Us</P>
                </li>
              </List>
            </div>
            <div className="orders">
              <Title className="footer" type="h4" text="Orders"></Title>
              <List>
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
              </List>
            </div>
            <div className="social">
              <Title className="footer" type="h4" text="Social"></Title>
              <Flex>
                <span style={{ width: `24px`, marginRight: `0.5em` }}>
                  {Facebook}
                </span>
                <span style={{ width: `24px` }}>{Instagram}</span>
              </Flex>
            </div>
          </Grid>
        </Wrapper>
      </div>
      <Section style={{ padding: `2em 0` }} className="payment">
        <Grid className="payment">
          <Flex className="payment-svg">
            <span className="">{Stripe}</span>
            <span className="">{Visa}</span>
            <span className="">{MasterCard}</span>
            <span className="">{Paypal}</span>
            <span className="">{Amex}</span>
          </Flex>
        </Grid>
      </Section>
      <Section style={{ padding: `1.5em 0` }}>
        <Wrapper>
          <Grid>
            <P style={{ margin: 0 }}>
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
          </Grid>
        </Wrapper>
      </Section>
    </footer>
  )
}

export default Footer
