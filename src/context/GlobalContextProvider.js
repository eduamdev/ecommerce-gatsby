import React from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  product: {},
  cart: [],
  isCartEmpty: true,
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART": {
      return {
        product: action.product,
        cart: state.isCartEmpty
          ? [action.product]
          : [...state.cart, action.product],
        isCartEmpty: false,
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
