import React from 'react'
import { withRouter } from 'react-router-dom'
import LoginContainer from '../../containers/Login'

const Login = ({
  history,
}) => (
  <LoginContainer
    history={history}
  />
)

export default withRouter(Login)