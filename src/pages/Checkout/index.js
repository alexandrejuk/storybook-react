import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import {
  addItemToCard,
  decrementItem,
  removeItemToCart,
} from '../../components/actions/cart'
import CheckoutContainer from '../../containers/Checkout'

const Checkout = ({
  addedItems,
  addCartItem,
  decrementCartItem,
  removeCartItem,
  login,
  history,
}) => {
  return (
    <CheckoutContainer
      addedItems={addedItems}
      addCartItem={addCartItem}
      decrementCartItem={decrementCartItem}
      history={history}
      removeCartItem={removeCartItem}
      login={login}
    />
  )
}

const mapStateToProps = (state)=>{
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Checkout))