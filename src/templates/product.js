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
import useImages from "../hooks/useImages"
import Img from "gatsby-image"

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

function getStars(num) {
  let stars = [4]

  if (isNaN(num)) {
    return
  } else {
    num = Number(num)

    if (num === 1) {
      stars = [star, outlineStar, outlineStar, outlineStar, outlineStar]
    } else if (num === 1.5) {
      stars = [star, halfStar, outlineStar, outlineStar, outlineStar]
    } else if (num === 2) {
      stars = [star, star, outlineStar, outlineStar, outlineStar]
    } else if (num === 2.5) {
      stars = [star, star, halfStar, outlineStar, outlineStar]
    } else if (num === 3) {
      stars = [star, star, star, outlineStar, outlineStar]
    } else if (num === 3.5) {
      stars = [star, star, star, halfStar, outlineStar]
    } else if (num === 4) {
      stars = [star, star, star, star, outlineStar]
    } else if (num === 4.5) {
      stars = [star, star, star, star, halfStar]
    } else if (num === 5) {
      stars = [star, star, star, star, star]
    } else {
      stars = [outlineStar, outlineStar, outlineStar, outlineStar, outlineStar]
    }

    return stars
  }
}

const Product = ({ pageContext }) => {
  const images = useImages()
  const image = images[pageContext.slug.replace(/-/g, "_")]

  return (
    <Layout>
      <SEO title="Product" />
      <Section>
        <Wrapper>
          <Grid className="product">
            <div className="product-image">
              <Img
                fluid={image.childImageSharp.fluid}
                alt={pageContext.name}
              ></Img>
            </div>
            <div className="product-info">
              <Title
                className="product-name"
                type="h2"
                text={`${pageContext.name}`}
              ></Title>
              <P className="product-info__price">$ {pageContext.price}</P>
              <P>{pageContext.description}</P>
              <Flex className="product-star-rating">
                {getStars(`${pageContext.stars}`)}
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
                {pageContext.details.length &&
                  pageContext.details.map((item, index) => {
                    return <li key={index}>{item}</li>
                  })}
              </ProductList>
            </div>
            <div className="product-reviews">
              <Title
                className="product-reviews"
                type="h3"
                text="Reviews"
              ></Title>
              <ReviewList>
                {pageContext.reviews.map((review, index) => {
                  return (
                    <li key={index}>
                      <Flex className="product-star-rating">
                        {getStars(`${review.stars}`)}
                      </Flex>
                      <Title
                        type="h4"
                        className="title-review"
                        text={`${review.title}`}
                      ></Title>
                      <P>{review.content}</P>
                    </li>
                  )
                })}
              </ReviewList>
            </div>
          </Grid>
        </Wrapper>
      </Section>
      <Featured></Featured>
    </Layout>
  )
}

export default Product
