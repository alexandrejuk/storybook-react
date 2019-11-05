import {
  find,
  propEq,
  prop,
} from 'ramda'
import {
  actionsType
} from '../actions/cart'

const {
  ADD_ITEM,
  DECREMENT_ITEM,
  GET_ALL_PRODUCTS,
  REMOVE_ITEM,
} = actionsType

const initialState = {
  items: [],
  addedItems:[],
}

const cartItem = (id, items) => find(propEq('id', id))(items)
const incrementItem = item => ({
  ...item,
  quantity: (prop('quantity', item) + 1) || 1,
})
const decrementItem = item => ({
  ...item,
  quantity: (prop('quantity', item) - 1),
})
const addCartItem = (item, items) => ([...items, item])

const cartReducer= (state = initialState, action) => {
  const { items, addedItems } = state
  switch (action.type) {
    case ADD_ITEM:
      const findItem = cartItem(action.id, items)
      const existedItem = cartItem(action.id, addedItems)
      if (existedItem) {
        return {
          ...state,
          addedItems: addedItems.map(item => {
            if (item.id === existedItem.id) return incrementItem(existedItem)
            return item
          }),
        }
      }
      const itemFindMoreQuantity = incrementItem(findItem)
      return {
        ...state,
        addedItems: addCartItem(itemFindMoreQuantity, addedItems),
      }
      case DECREMENT_ITEM:
        const decrementItemFound = cartItem(action.id, addedItems)
        if (decrementItemFound.quantity === 1) {
          return {
            ...state,
            addedItems: addedItems.filter(({ id }) => id !== decrementItemFound.id),
          }
        }
        return {
          ...state,
          addedItems: addedItems.map(item => {
            if (item.id === decrementItemFound.id) return decrementItem(decrementItemFound)
            return item
          })
        }
    case REMOVE_ITEM:
      const foundItem = cartItem(action.id, addedItems)
      return {
        ...state,
        addedItems: addedItems.filter(({ id }) => id !== foundItem.id),
      }
      case GET_ALL_PRODUCTS:
        return {
          ...state,
          items: action.products,
        }
    default:
      return state
  }
}

export default cartReducer