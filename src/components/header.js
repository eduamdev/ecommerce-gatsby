import React, { useContext } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Title from "./title"
import Wrapper from "./wrapper"
import Nav from "./nav"
import Grid from "./grid"
import Flex from "./flex"
import { Cart, Airplane } from "./svg"
import LinkUp from "./link"
import { GlobalStateContext } from "../context/GlobalContextProvider"
import useImages from "../hooks/useImages"
import Img from "gatsby-image"
import P from "./paragraph"

const StyledHeader = styled.header`
  /* height: 80px; */
  display: grid;
  align-items: center;
  background-color: #fff;
  /* border-top: 2px solid #bb7878; */
  border-bottom: 1px solid #ddd;
`

const Header = ({ siteTitle }) => {
  const state = useContext(GlobalStateContext)
  const { logo } = useImages()

  return (
    <>
      <StyledHeader>
        <Flex className="announcement-bar">
          <span>{Airplane}</span>
          <P>Free International Shipping!</P>
        </Flex>
        <Wrapper>
          <Grid className="header">
            <LinkUp
              className="header logo"
              type="internal"
              url="/"
              ariaLabel="Shoecase"
            >
              <Flex className="logo">
                <Img
                  className="logo-img"
                  fixed={logo.childImageSharp.fixed}
                  alt="Shoecase"
                ></Img>
                <Title type="h3" text={siteTitle} className="logo-text"></Title>
              </Flex>
            </LinkUp>
            <Nav></Nav>
            <LinkUp
              className={
                state.isCartEmpty ? "header-cart" : "header-cart badge"
              }
              type="internal"
              url="/cart"
              ariaLabel="cart"
            >
              {Cart}
            </LinkUp>
          </Grid>
        </Wrapper>
      </StyledHeader>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
