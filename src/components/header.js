import PropTypes from "prop-types"
import React, { useContext } from "react"
import styled from "styled-components"
import Title from "./title"
import Wrapper from "./wrapper"
import Nav from "./nav"
import Grid from "./grid"
import { Cart } from "./svg"
import LinkUp from "./link"
import { GlobalStateContext } from "../context/GlobalContextProvider"

const StyledHeader = styled.header`
  height: 80px;
  display: grid;
  align-items: center;
  background-color: #fff;
`

const Header = ({ siteTitle }) => {
  const state = useContext(GlobalStateContext)

  return (
    <StyledHeader>
      <Wrapper>
        <Grid className="header">
          <LinkUp className="logo" type="internal" url="/" ariaLabel="Shoecase">
            <Title type="h3" text={siteTitle} className="header"></Title>
          </LinkUp>
          <Nav></Nav>
          <LinkUp
            className={state.isCartEmpty ? "header-cart" : "header-cart badge"}
            type="internal"
            url="/cart"
            ariaLabel="cart"
          >
            {Cart}
          </LinkUp>
        </Grid>
      </Wrapper>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
