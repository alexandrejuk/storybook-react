import {
  find,
  propEq,
  prop,
} from 'ramda'
import {
  actionsType
} from '../actions/cart'

const { ADD_ITEM } = actionsType

const initialState = {
  items: [
      {
        id: 1,
        title: 'Winter body',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 110,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
      },
      {
        id: 2,
        title: 'Adidas',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 80,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
      },
      {
        id: 3,
        title: 'Vans',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 120,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
      },
      {
        id: 4,
        title: 'White',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 260,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
      },
      {
        id: 5,
        title: 'Cropped-sho',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 160,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
      },
      {
        id: 6,
        title: 'Blues',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 90,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
      },
  ],
  addedItems:[],
  total: 0,
}

const cartItem = (id, items) => find(propEq('id', id))(items)
const incrementItem = item => ({
  ...item,
  quantity: (prop('quantity', item) + 1) || 1,
})
const addCartItem = (item, items) => ([...items, item])
const incrementTotal = (total, item) => (total + prop('price', item))

const cartReducer= (state = initialState, action) => {
  const { items, addedItems, total } = state
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
          total: incrementTotal(total, existedItem) 
        }
      }
      return {
        ...state,
        addedItems: addCartItem(incrementItem(findItem), addedItems),
        total: incrementTotal(total, findItem) 
      }
    default:
      return state
  }
}

export default cartReducer