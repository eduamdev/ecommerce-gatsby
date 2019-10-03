import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Flex = styled.div`
  display: flex;

  &.shoemaker {
    justify-content: flex-end;
  }
`

const FlexContainer = ({ className, children }) => {
  return <Flex className={className}>{children}</Flex>
}

Flex.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default FlexContainer
