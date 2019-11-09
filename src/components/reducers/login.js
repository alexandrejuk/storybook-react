import {
  actionsType
} from '../actions/login'

const {
  LOGGED,
  LOGGOUT,
  NEW_USER,
} = actionsType

const initialState = {
  users: [],
  logged: null
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED:
      const findUser = state.users.find(
        user => (action.payload.username === user.username)
      )
      if(findUser) {
        return {
          ...state,
          logged: findUser,
        }
      }
      return state
    case LOGGOUT:
      return {
        ...state,
        logged: null,
      }
    case NEW_USER:
      const foundUser = state.users.find(
        user => (action.payload.username === user.username)
      )
      if(!foundUser) {
        return {
          ...state,
          users: [
            ...state.users,
            action.payload,
          ],
          logged: null,
        }
      }
      return state
    default:
      return state
  }
}

export default loginReducer