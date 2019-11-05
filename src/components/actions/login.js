const LOGGED = 'LOGGED'
const LOGGOUT = 'LOGGOUT'

const logged = user => ({ type: LOGGED, user })
const loggout = id => ({ type: LOGGOUT })

const actionsType = {
  LOGGED,
  LOGGOUT,
}

export {
  actionsType,
  logged,
  loggout,
}