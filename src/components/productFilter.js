import React, { useState } from "react"
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

const ProductFilter = ({ products, filterByPrice }) => {
  const maxPrice = Math.max(...products.map(item => item.price))
  const minPrice = 0
  const [showFilter, toggle] = useState(true)
  const [price, updatingPrice] = useState(maxPrice)

  const handleChange = event => {
    updatingPrice(event.target.value)
    filterByPrice(event.target.value)
  }

  return (
    <Section className="filter">
      <Grid>
        <Flex className="filter" onClick={() => toggle(!showFilter)}>
          <P style={{ margin: 0 }}>
            Max price{" "}
            <span style={{ color: `rgb(187,120,120)`, fontWeight: 700 }}>
              ${price}
            </span>
          </P>
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
          onChange={handleChange}
        />
        <span className="min">${minPrice}</span>
        <span className="max">${maxPrice}</span>
      </Grid>
    </Section>
  )
}

ProductFilter.propTypes = {
  products: PropTypes.array.isRequired,
  filterByPrice: PropTypes.func.isRequired,
}

ProductFilter.defaultProps = {
  products: [],
  filterByPrice: {},
}

export default ProductFilter
