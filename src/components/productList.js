import React from "react"
import Section from "./section"
import Grid from "./grid"
import Card from "./card"

const ProductList = () => {
  return (
    <Section className="products">
      <Grid className="productList">
        <Card item={{ url: "/product/mila-myth" }}></Card>
        <Card item={{ url: "/product/batcombe-lord" }}></Card>
        <Card item={{ url: "/product/desert-boot" }}></Card>
        <Card item={{ url: "/product/mila-myth" }}></Card>
        <Card item={{ url: "/product/batcombe-lord" }}></Card>
        <Card item={{ url: "/product/desert-boot" }}></Card>
        <Card item={{ url: "/product/mila-myth" }}></Card>
        <Card item={{ url: "/product/desert-boot" }}></Card>
        <Card item={{ url: "/product/batcombe-lord" }}></Card>
        <Card item={{ url: "/product/desert-boot" }}></Card>
        <Card item={{ url: "/product/mila-myth" }}></Card>
        <Card item={{ url: "/product/batcombe-lord" }}></Card>
        <Card item={{ url: "/product/desert-boot" }}></Card>
        <Card item={{ url: "/product/mila-myth" }}></Card>
        <Card item={{ url: "/product/batcombe-lord" }}></Card>
        <Card item={{ url: "/product/desert-boot" }}></Card>
      </Grid>
    </Section>
  )
}

export default ProductList
