import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { isEmpty } from 'ramda'
import { connect } from 'react-redux'
import LoginContainer from '../../containers/Login'
import {
  loggedUser,
  newUser,
} from '../../components/actions/login'
const Login = ({
  addUser,
  login,
  logged,
  history,
}) => {
  const [formData, setFormData] = useState({})
  const [formId, setFormId] = useState(0)
  useEffect(() => {
    if (logged) {
      return history.push('payment')
    }
  }, [
    logged,
    history
  ])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({...formData, [name]: value })
  }

  const handleSubmit = (type) => {
    if(!isEmpty(formData)) {
      if(type === 'login') {
        login(formData)
      }

      if(type === 'add') {
        addUser(formData)
        setFormId(formId+1)
      }
    }
  }

  return (
    <LoginContainer
      key={formId}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      history={history}
    />
  )
}

const mapStateToProps = (state)=>{
  const { login: { logged } } = state
  return {
    logged,
  }
}

const mapDispatchToProps= (dispatch)=>{
  return {
    addUser: payload => dispatch(newUser(payload)),
    login: payload => dispatch(loggedUser(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))