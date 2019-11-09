import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import OrderContainer from '../../containers/Order'
import { connect } from 'react-redux'
const Order = ({
  history,
  logged,
  orders,
}) => {

  useEffect(() => {
    if (!logged) {
      return history.push('login')
    }
  }, [history])

  return (
    <OrderContainer
      logged={logged}
      orders={orders}
    />
  )
}

const mapStateToProps = (state) => {
  const {
    login: { logged },
    orders: {
      orders,
    },
  } = state
  return {
    logged,
    orders,
  }
}

export default connect(mapStateToProps)(withRouter(Order))