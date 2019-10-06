import React from "react"
import styled from "styled-components"
import Section from "./section"
import Grid from "./grid"
import Flex from "./flex"
import P from "./paragraph"
import { ArrowDown, ArrowUp } from "./svg"

const FilterSvg = styled.span`
  height: 20px;
  margin-left:0.2em;

  & svg {
    height: 100%;
  }
`

const Slider = styled.input`
  margin-top: 1em;
`

const ProductFilter = () => {
  return (
    <Section className="filter">
      <Grid>
      <Flex className="filter">
        <P style={{ margin: 0 }}>Price</P>
        <FilterSvg>{ArrowUp}</FilterSvg>
      </Flex>
      </Grid>
      
      <Grid className="filter-range"> 
        <Slider className="slider" type="range" />
        <span className="min">$0</span>
        <span className="max">$236.47</span>
      </Grid>
    </Section>
  )
}

export default ProductFilter
