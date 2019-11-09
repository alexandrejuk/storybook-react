import {
  actionsType
} from '../actions/login'

const {
  LOGGED,
  LOGGOUT,
} = actionsType

const initialState = null

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED:  
      return {
        ...action.payload,
      }
    case LOGGOUT:
      return null
  
    default:
      return state
  }
}

export default loginReducer