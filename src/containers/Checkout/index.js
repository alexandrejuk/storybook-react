import React, { Fragment } from 'react'
import { List } from '../../components'
import './style.css'

const Checkout = ({
  addedItems,
  addCartItem,
  decrementCartItem,
  removeCartItem,
}) => (
  <Fragment>
    <h3>Meu carrinho</h3>
    <div className="checkoutContent">
      <List
        data={addedItems}
        addItem={addCartItem}
        decrementItem={decrementCartItem}
        removeItem={removeCartItem}
      />
      <div className="checkoutShipping">
        Validation
      </div>
    </div>
  </Fragment>
)

export default Checkout
