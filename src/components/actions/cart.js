const ADD_ITEM = 'ADD_ITEM'

const addItemToCard = id => ({ type: ADD_ITEM, id })

const actionsType = {
  ADD_ITEM,
}

export {
  actionsType,
  addItemToCard,
}