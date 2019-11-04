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
  REMOVE_ITEM,
} = actionsType

const initialState = {
  items: [
      {
        id: 1,
        title: 'Winter body',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 110,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
      },
      {
        id: 2,
        title: 'Adidas',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 80,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
      },
      {
        id: 3,
        title: 'Vans',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 120,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
      },
      {
        id: 4,
        title: 'White',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 260,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
      },
      {
        id: 5,
        title: 'Cropped-sho',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 160,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
      },
      {
        id: 6,
        title: 'Blues',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 90,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
      },
      {
        id: 7,
        title: 'White',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 260,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
      },
      {
        id: 8,
        title: 'Cropped-sho',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 160,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
      },
      {
        id: 9,
        title: 'Blues',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 90,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
      },     {
        id: 10,
        title: 'White',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 260,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
      },
      {
        id: 11,
        title: 'Cropped-sho',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 160,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
      },
      {
        id: 12,
        title: 'Blues',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 90,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
      },
  ],
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
    default:
      return state
  }
}

export default cartReducer