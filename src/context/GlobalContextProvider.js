import React from "react"
import items from "../content/products.json"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

function getData() {
  let products = formatData(items)
  let featuredProducts = products.filter(product => product.featured === true)
  let maxPrice = Math.max(...products.map(item => item.price))

  return {
    products,
    featuredProducts,
    sortedProducts: products,
    loading: false,
    price: maxPrice,
    minPrice: 0,
    maxPrice,
  }
}

function formatData(items) {
  let tempItems = items.map(item => {
    let product = { ...item }

    return product
  })

  return tempItems
}

const initialState = getData()

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_PRICE": {
      return {
        ...state,
        price: action.price,
      }
    }
    default:
      throw new Error("Bad Action Type")
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
