import React from 'react'
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
  addCartItem,
  decrementCartItem,
  removeCartItem,
  history,
}) => {
  return (
    <PaymentContainer
      addCartItem={addCartItem}
      decrementCartItem={decrementCartItem}
      removeCartItem={removeCartItem}
      addedItems={addedItems}
      history={history}
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Payment))