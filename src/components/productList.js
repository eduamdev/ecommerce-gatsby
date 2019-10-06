import React from "react"
import Section from "./section"
import Grid from "./grid"
import Card from "./card"

const ProductList = () => {
  return (
    <Section className="products">
      <Grid className="productList">
        <Card item={{ url: "/product" }}></Card>
        <Card item={{ url: "/product" }}></Card>
        <Card item={{ url: "/product" }}></Card>
        <Card item={{ url: "/product" }}></Card>
        <Card item={{ url: "/product" }}></Card>
        <Card item={{ url: "/product" }}></Card>
        <Card item={{ url: "/product" }}></Card>
        <Card item={{ url: "/product" }}></Card>
        <Card item={{ url: "/product" }}></Card>
        <Card item={{ url: "/product" }}></Card>
        <Card item={{ url: "/product" }}></Card>
        <Card item={{ url: "/product" }}></Card>
        <Card item={{ url: "/product" }}></Card>
        <Card item={{ url: "/product" }}></Card>
        <Card item={{ url: "/product" }}></Card>
        <Card item={{ url: "/product" }}></Card>
      </Grid>
    </Section>
  )
}

export default ProductList
