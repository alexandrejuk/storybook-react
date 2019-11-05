import {
  actionsType
} from '../actions/login'

const {
  LOGGED,
  LOGGOUT,
} = actionsType

const initialState = {
  user: {
    username: 'Alexandre',
    fullName: 'Alexandre S. Soares',
    address: {
      street: 'Rua Bueno Vilela',
      street_number: '51',
      city: 'São Bernardo do Campo',
      state: 'SP',
      zipcode: '09784385',
      neighborhood: 'Montanhão',
    },
    phone: '11987654321',
  }
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED:  
      return {
        ...state,
        user: action.user,
      }
    case LOGGOUT:
      return {
        ...state,
        user: null,
      }
  
    default:
      return state
  }
}

export default loginReducer