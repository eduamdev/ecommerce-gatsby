import React, { useState, useContext } from "react"
import useImages from "../hooks/useImages"
import { GlobalDispatchContext } from "../context/GlobalContextProvider"
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

const Input = styled.input`
  outline: none;
  font-size: 1.1em;
  font-weight: 700;
  padding: 0 0 0 0.75em;
  width: 3rem;
  height: 3rem;
  border: none;
  line-height: 1.3;
  appearance: none;
  margin: 0;
`

const Button = styled.button`
  cursor: pointer;
  outline: 0;
  border: none;

  &.update-num {
    font-weight: 200;
    font-size: 1.7em;
    padding: 0 0.6em;
    border: 0;
    background: #ddd;
    width: 3rem;
    height: 3rem;
    cursor: pointer;

    &:hover {
      background: #e5e5e5;
    }
  }

  &.addToCart {
    display: inline-block;
    background: rgb(187, 120, 120);
    color: #fff;
    padding: 0.75em 1.2em;
    border-radius: 2px;
    width: 9rem;
    text-align: center;

    &:hover {
      background: rgb(146, 93, 93);
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
  const dispatch = useContext(GlobalDispatchContext)
  let [count, updateCount] = useState(1)
  const images = useImages()
  const image = images[pageContext.slug.replace(/-/g, "_")]
  const {
    id,
    slug,
    name,
    description,
    stars,
    price,
    details,
    reviews,
  } = pageContext

  return (
    <Layout>
      <SEO title="Product" />
      <Section>
        <form onSubmit={ev => ev.preventDefault()}>
          <Wrapper>
            <Grid className="product">
              <div className="product-image">
                <Img fluid={image.childImageSharp.fluid} alt={name}></Img>
              </div>
              <div className="product-info">
                <Title
                  className="product-name"
                  type="h2"
                  text={`${name}`}
                ></Title>
                <P className="product-info__price">$ {price}</P>
                <P>{description}</P>
                <Flex className="product-star-rating">
                  {getStars(`${stars}`)}
                </Flex>
                <P className="quantity">
                  <Button
                    className="update-num"
                    onClick={() => {
                      count > 1 && updateCount(count - 1)
                    }}
                  >
                    -
                  </Button>
                  <Input type="number" value={count} readOnly />
                  <Button
                    className="update-num"
                    onClick={() => {
                      updateCount(count + 1)
                    }}
                  >
                    +
                  </Button>
                </P>
                <Button
                  type="button"
                  className="addToCart"
                  onClick={() => {
                    dispatch({
                      type: "ADD_PRODUCT_TO_CART",
                      product: {
                        id,
                        slug,
                        name,
                        quantity: count,
                        price,
                        total: count * price,
                      },
                    })
                  }}
                >
                  Add to cart
                </Button>
              </div>
              <div className="product-details">
                <Title
                  className="product-details__title"
                  type="h3"
                  text="Details"
                ></Title>
                <ProductList>
                  {details.length &&
                    details.map((item, index) => {
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
                  {reviews.map((review, index) => {
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
        </form>
      </Section>
      <Featured></Featured>
    </Layout>
  )
}

export default Product
