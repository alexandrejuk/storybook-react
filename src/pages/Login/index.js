import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { isEmpty } from 'ramda'
import { connect } from 'react-redux'
import LoginContainer from '../../containers/Login'
import {
  logged,
  loggout,
} from '../../components/actions/login'
const Login = ({
  login,
  loggedUser,
  history,
}) => {
  const [formData, setFormData] = useState({})

  useEffect(() => {
    if (login) {
      return history.push('payment')
    }
  }, [history])

  const handleChange = (name, value) => {
    setFormData({...formData, [name]: value })
  }

  const handleSubmit = () => {
    if(!isEmpty(formData)) {
      console.log(formData)
      return
    }
  }

  return (
    <LoginContainer
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      history={history}
    />
  )
}

const mapStateToProps = (state)=>{
  const { login } = state
  return {
    login,
  }
}

const mapDispatchToProps= (dispatch)=>{
  return {
    loggedUser: payload => dispatch(logged(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))