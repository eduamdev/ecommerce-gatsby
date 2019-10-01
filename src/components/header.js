import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Title from "./title"
import Wrapper from "./wrapper"

const StyledHeader = styled.header`
  height: 80px;
  display: grid;
  align-items: center;
  justify-content;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Wrapper>
      <Title text={siteTitle}></Title>
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
