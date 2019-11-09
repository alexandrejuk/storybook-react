const ADD_ORDER = 'ADD_ORDER'

const addOrder = payload => ({ type: ADD_ORDER, payload })

const actionsType = {
  ADD_ORDER,
}

export {
  actionsType,
  addOrder,
}