import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  addItemToCard,
  decrementItem,
  removeItemToCart,
} from '../../components/actions/cart'
import PaymentContainer from '../../containers/Payment'

const Payment = ({
  addedItems,
  login,
  addCartItem,
  decrementCartItem,
  removeCartItem,
  history,
}) => {
  
  useEffect(() => {
    if (!login) {
      return history.push('login')
    }
  }, [history]) 

  return (
    <PaymentContainer
      addCartItem={addCartItem}
      decrementCartItem={decrementCartItem}
      removeCartItem={removeCartItem}
      addedItems={addedItems}
      history={history}
      address={login.address}
    />
  )
}


const mapStateToProps = (state) => {
  const { login, products: { addedItems } } = state
  return {
    addedItems,
    login,
  }
}

const mapDispatchToProps= (dispatch)=>{
  return {
    addCartItem: id => dispatch(addItemToCard(id)),
    decrementCartItem: id => dispatch(decrementItem(id)),
    removeCartItem: id => dispatch(removeItemToCart(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Payment))