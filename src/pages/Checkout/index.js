import React from 'react'
import { connect } from 'react-redux'

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
}) => {
  return (
    <CheckoutContainer
      addedItems={addedItems}
      addCartItem={addCartItem}
      decrementCartItem={decrementCartItem}
      removeCartItem={removeCartItem}
    />
  )
}

const mapStateToProps = (state)=>{
  const { addedItems } = state
  return {
    addedItems
  }
}

const mapDispatchToProps= (dispatch)=>{
  return {
    addCartItem: id => dispatch(addItemToCard(id)),
    decrementCartItem: id => dispatch(decrementItem(id)),
    removeCartItem: id => dispatch(removeItemToCart(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)