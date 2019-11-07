import React from "react"
import styled from "styled-components"
import Flex from "./flex"
import LinkUp from "./link"
import { viewport } from "./breakpoints"

const List = styled.ul`
  list-style: none;
  margin: 0;

  & li {
    margin: 0;

    &:not(:last-child) {
      margin-right: 1.25em;

      @media ${viewport[7]} {
        margin-right: 1.5em;
      }
    }
  }
`

const Nav = () => {
  return (
    <nav>
      <List>
        <Flex>
          <li>
            <LinkUp className="nav" type="internal" url="/men" ariaLabel="Men">
              Men
            </LinkUp>
          </li>
          <li>
            <LinkUp
              className="nav"
              type="internal"
              url="/women"
              ariaLabel="Women"
            >
              Women
            </LinkUp>
          </li>
        </Flex>
      </List>
    </nav>
  )
}

export default Nav
