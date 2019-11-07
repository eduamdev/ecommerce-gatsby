import React, { useContext } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Title from "./title"
import Wrapper from "./wrapper"
import Nav from "./nav"
import Grid from "./grid"
import Flex from "./flex"
import { Cart } from "./svg"
import LinkUp from "./link"
import { GlobalStateContext } from "../context/GlobalContextProvider"
import Svg from "../images/logo.svg"

const StyledHeader = styled.header`
  /* height: 80px; */
  display: grid;
  align-items: center;
  background-color: #fff;
  /* border-top: 2px solid #bb7878; */
  border-bottom: 1px solid #ddd;
  min-height: 60px;
`

const Header = ({ siteTitle }) => {
  const state = useContext(GlobalStateContext)

  return (
    <>
      <StyledHeader>
        <Wrapper>
          <Grid className="header">
            <LinkUp
              className="header logo"
              type="internal"
              url="/"
              ariaLabel="Shoecase"
            >
              <Flex className="logo">
                <img className="logo-img" src={Svg} alt="Shoecase" />
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
              title="Cart"
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
