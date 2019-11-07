import React, { useState, useContext, useEffect } from "react"
import useImages from "../hooks/useImages"
import { GlobalDispatchContext } from "../context/GlobalContextProvider"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/grid"
import Flex from "../components/flex"
import Section from "../components/section"
import Wrapper from "../components/wrapper"
import Featured from "../components/featured"
import Heading from "../components/heading"
import P from "../components/paragraph"
import { star, halfStar, outlineStar } from "../components/svg"
import styled from "styled-components"
import Img from "gatsby-image"
import "aos/dist/aos.css"

const ProductList = styled.ul`
  margin-bottom: 1em;
  margin-top: 2em;
  list-style-type: square;

  & li {
    margin-bottom: 0.15em;
  }
`

const ReviewList = styled.ul`
  margin: 0;
  margin-top: 1em;
  list-style: none;

  & li {
    padding: 2em 1em 2em 0;
    margin: 0;

    & .title-review {
      margin: 1em 0 0.25em;
    }

    &:first-child {
      padding-top: 1em;
    }
  }

  & li:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }
`

const Input = styled.input`
  outline: none;
  font-size: 1.1em;
  font-weight: 600;
  padding: 0 0 0 0.75em;
  width: 2.5rem;
  /* height: 2.5rem; */
  border: none;
  line-height: 1.3;
  appearance: none;
  margin: 0;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
`

const Button = styled.button`
  cursor: pointer;
  outline: 0;
  border: none;

  &.update-num {
    font-weight: 200;
    font-size: 1.5em;
    padding: 0;
    border: 0;
    background: #fff;
    border: 1px solid #000;
    /* font-weight: 700; */
    width: 2.5rem;
    /* height: 2.5rem; */
    cursor: pointer;

    &:hover {
      background: #e5e5e5;
    }
  }

  &.plus {
    border-left: none;
  }

  &.minus {
    border-right: none;
  }

  &.addToCart {
    display: inline-block;
    background: #3e2723;
    color: #fff;
    padding: 0.75em 1.2em;
    border-radius: 2px;
    /* width: 9rem; */
    text-align: center;
    font-size: 16px;

    &:hover {
      /* background: rgb(146, 93, 93); */
      background: #1b0000;
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
  const {
    id,
    slug,
    name,
    description,
    stars,
    price,
    details,
    reviews,
    image,
  } = pageContext

  useEffect(() => {
    const AOS = require("aos")
    AOS.init()
  }, [])

  return (
    <Layout>
      <SEO title="Product" />
      <Section>
        <form style={{ margin: 0 }} onSubmit={ev => ev.preventDefault()}>
          <Wrapper className="product">
            <Grid className="product">
              <div className="product-image">
                <Img
                  fluid={images[image].childImageSharp.fluid}
                  alt={name}
                ></Img>
              </div>
              <div className="product-info" data-aos="fade-in">
                <Heading rank={2} className="product-name">
                  {name}
                </Heading>
                <Flex
                  className="product-star-rating"
                  style={{ margin: "1em 0" }}
                >
                  {getStars(`${stars}`)}
                </Flex>
                <P>{description}</P>
                <span className="product-info__price">${price}</span>
                <Grid className="quantity">
                  <Flex>
                    <Button
                      className="update-num minus"
                      onClick={() => {
                        count > 1 && updateCount(count - 1)
                      }}
                    >
                      -
                    </Button>
                    <Input type="number" value={count} readOnly />
                    <Button
                      className="update-num plus"
                      onClick={() => {
                        updateCount(count + 1)
                      }}
                    >
                      +
                    </Button>
                  </Flex>
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
                          description,
                          quantity: count,
                          price,
                          total: count * ((price * 10) / 10),
                          image,
                        },
                      })
                    }}
                  >
                    Add to cart
                  </Button>
                </Grid>
              </div>
              <div className="product-details" data-aos="fade-in">
                {/* <Title
                  className="product-details__title"
                  type="h3"
                  text="Details"
                ></Title> */}

                <Heading rank={2} className="product-details__title">
                  Details
                </Heading>
                <ProductList>
                  {details.length &&
                    details.map((item, index) => {
                      return (
                        <li key={index}>
                          <P>{item}</P>
                        </li>
                      )
                    })}
                </ProductList>
              </div>
              <div className="product-reviews" data-aos="fade-up">
                {/* <Title
                  className="product-reviews__title"
                  type="h3"
                  text="Reviews"
                ></Title> */}

                <Heading rank={2} className="product-details__title">
                  Reviews
                </Heading>
                <ReviewList>
                  {reviews.map((review, index) => {
                    return (
                      <li key={index}>
                        <Flex className="product-star-rating">
                          {getStars(`${review.stars}`)}
                        </Flex>
                        {/* <Title
                          type="h4"
                          className="title-review"
                          text={`${review.title}`}
                        ></Title> */}
                        <Heading rank={3} className="title-review">
                          {review.title}
                        </Heading>
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
