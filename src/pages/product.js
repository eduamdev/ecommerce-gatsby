import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/grid"
import Flex from "../components/flex"
import Section from "../components/section"
import Wrapper from "../components/wrapper"
import Featured from "../components/featured"
import Title from "../components/title"
import P from "../components/paragraph"
import { star, halfStar, outlineStar } from "../components/svg"
import styled from "styled-components"
import LinkUp from "../components/link"

const ProductList = styled.ul`
  margin-bottom: 1em;
  margin-top: 1em;
  list-style-type: square;

  & li {
    margin: 0;
  }
`

const ReviewList = styled.ul`
  margin: 0;
  margin-top: 1em;
  list-style: none;

  & li {
    border-bottom: 1px solid #ddd;
    padding: 2em 1em 2em 0;
    margin: 0;

    &:first-child {
      padding-top: 1em;
    }
  }
`

const Product = () => (
  <Layout>
    <SEO title="Product" />
    <Section>
      <Wrapper>
        <Grid className="product">
          <div className="product-image">
            <img
              src="https://clarks.scene7.com/is/image/Pangaea2Build/26130853_W_1"
              alt=""
            />
          </div>
          <div className="product-info">
            <Title
              className="product-name"
              type="h2"
              text="Mascarpone Ela"
            ></Title>
            <P className="product-info__price">$ 220</P>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              illum est. Obcaecati, enim rerum?
            </P>
            <Flex className="product-star-rating">
              {star}
              {star}
              {star}
              {star}
              {outlineStar}
            </Flex>
            <P className="quantity">
              <button className="update-num">-</button>
              <input type="number" value="1" />
              <button className="update-num">+</button>
            </P>

            <LinkUp
              type="internal"
              url="/products"
              className="addToCart"
              ariaLabel="Add to cart"
            >
              Add to cart
            </LinkUp>
          </div>
          <div className="product-details">
            <Title
              className="product-details__title"
              type="h3"
              text="Details"
            ></Title>
            <ProductList>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Impedit vel saepe necessitatibus.
              </li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nostrum!
              </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit.</li>
            </ProductList>
          </div>
          <div className="product-reviews">
            <Title className="product-reviews" type="h3" text="Reviews"></Title>
            <ReviewList>
              <li>
                <Flex className="product-star-rating">
                  {star}
                  {star}
                  {star}
                  {halfStar}
                  {outlineStar}
                </Flex>
                <Title
                  type="h4"
                  className="title-review"
                  text="Lorem, ipsum dolor."
                ></Title>
                <P>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit vel saepe necessitatibus.
                </P>
              </li>
              <li>
                <Flex className="product-star-rating">
                  {star}
                  {star}
                  {star}
                  {star}
                  {outlineStar}
                </Flex>
                <Title
                  type="h4"
                  className="title-review"
                  text="Lorem, ipsum dolor."
                ></Title>
                <P>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
                  pariatur tenetur sed quibusdam, atque, minima asperiores
                  exercitationem quae id accusantium assumenda accusamus illum
                  explicabo repellendus ex aut corporis quod numquam. Doloremque
                  perspiciatis adipisci quod minus atque, nulla perferendis
                  corrupti ad!
                </P>
              </li>
            </ReviewList>
          </div>
        </Grid>
      </Wrapper>
    </Section>
    <Featured></Featured>
  </Layout>
)

export default Product
