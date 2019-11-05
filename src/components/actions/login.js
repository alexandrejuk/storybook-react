const LOGGED = 'LOGGED'
const LOGGOUT = 'LOGGOUT'

const logged = payload => ({ type: LOGGED, payload })
const loggout = () => ({ type: LOGGOUT })

const actionsType = {
  LOGGED,
  LOGGOUT,
}

export {
  actionsType,
  logged,
  loggout,
}