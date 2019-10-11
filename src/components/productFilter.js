import React, { useState, useContext } from "react"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider"
import styled from "styled-components"
import Section from "./section"
import Grid from "./grid"
import Flex from "./flex"
import P from "./paragraph"
import { ArrowDown, ArrowUp } from "./svg"
import PropTypes from "prop-types"

const FilterSvg = styled.span`
  height: 20px;
  margin-left: 0.2em;

  & svg {
    height: 100%;
  }
`

const Slider = styled.input`
  margin-top: 1em;
`

const ProductFilter = ({ products }) => {
  const [showFilter, toggle] = useState(false)
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)
  const { maxPrice, minPrice, price } = state

  return (
    <Section className="filter">
      <Grid>
        <Flex className="filter" onClick={() => toggle(!showFilter)}>
          <P style={{ margin: 0 }}>Price</P>
          <FilterSvg>{showFilter ? ArrowUp : ArrowDown}</FilterSvg>
        </Flex>
      </Grid>
      <Grid className={showFilter ? "filter-range show" : "filter-range"}>
        <Slider
          className="slider"
          type="range"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={() => {
            dispatch({
              type: "UPDATE_PRICE",
            })
          }}
        />
        <span className="min">${minPrice}</span>
        <span className="max">${maxPrice}</span>
      </Grid>
    </Section>
  )
}

ProductFilter.propTypes = {
  products: PropTypes.array.isRequired,
}

ProductFilter.defaultProps = {
  products: [],
}

export default ProductFilter
