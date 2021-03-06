const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const ADD_ITEM = 'ADD_ITEM'
const DECREMENT_ITEM = 'DECREMENT_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'

const getProducts = products => ({ type: GET_ALL_PRODUCTS, products })
const addItemToCard = id => ({ type: ADD_ITEM, id })
const decrementItem = id => ({ type: DECREMENT_ITEM, id })
const removeItemToCart = id => ({ type: REMOVE_ITEM, id })

const actionsType = {
  GET_ALL_PRODUCTS,
  ADD_ITEM,
  DECREMENT_ITEM,
  REMOVE_ITEM,
}

export {
  actionsType,
  addItemToCard,
  decrementItem,
  removeItemToCart,
  getProducts,
}