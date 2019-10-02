import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Title from "./title"
import Wrapper from "./wrapper"
import Nav from "./nav"
import Grid from "./grid"
import { Cart } from "./svg"

const StyledHeader = styled.header`
  height: 80px;
  display: grid;
  align-items: center;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Wrapper>
      <Grid className="header">
        <Title text={siteTitle} className="header"></Title>
        <Nav></Nav>
        {Cart}
      </Grid>
    </Wrapper>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
