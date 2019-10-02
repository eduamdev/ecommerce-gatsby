import React from "react"
import styled from "styled-components"
import Flex from "./flex"
import LinkUp from "./link"

const List = styled.ul`
  list-style: none;
  margin: 0;

  & li {
    margin: 0;

    &:not(:last-child) {
      margin-right: 1.2em;
    }
  }
`

const Nav = () => {
  return (
    <nav>
      <List>
        <Flex>
          <li>
            <LinkUp className="nav" type="internal" url="/" ariaLabel="Men">
              Men
            </LinkUp>
          </li>
          <li>
            <LinkUp className="nav" type="internal" url="/" ariaLabel="Women">
              Women
            </LinkUp>
          </li>
        </Flex>
      </List>
    </nav>
  )
}

export default Nav
