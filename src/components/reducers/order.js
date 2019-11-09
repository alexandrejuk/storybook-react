import {
  actionsType
} from '../actions/order'

const {
  ADD_ORDER,
} = actionsType

const initialState = {
  orders: [],
}

const orderReduce = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        orders: [
          ...state.orders,
          action.payload,
        ],
      }
    default:
      return state
  }
}

export default orderReduce