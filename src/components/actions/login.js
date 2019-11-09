const LOGGED = 'LOGGED'
const LOGGOUT = 'LOGGOUT'
const NEW_USER = 'NEW_USER'

const loggedUser = payload => ({ type: LOGGED, payload })
const loggout = () => ({ type: LOGGOUT })
const newUser = payload => ({ type: NEW_USER, payload })

const actionsType = {
  LOGGED,
  LOGGOUT,
  NEW_USER,
}

export {
  actionsType,
  loggedUser,
  loggout,
  newUser,
}