import { useState } from "react"

export default (products, filterByPrice) => {
  const maxPrice = Math.max(...products.map(item => item.price))
  const minPrice = 0

  const [filterIsShowing, toggleFilter] = useState(true)
  const [price, updatingPrice] = useState(maxPrice)

  return {
    maxPrice,
    minPrice,
    price,
    filterIsShowing,
    toggle: () => {
      toggleFilter(!filterIsShowing)
    },
    handleChange: event => {
      updatingPrice(event.target.value)
      filterByPrice(event.target.value)
    },
  }
}
