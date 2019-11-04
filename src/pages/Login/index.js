import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { isEmpty } from 'ramda'
import LoginContainer from '../../containers/Login'

const Login = ({
  history,
}) => {
  const [formData, setFormData] = useState({})

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

export default withRouter(Login)