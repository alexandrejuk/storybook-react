import React from 'react'
import { map } from 'ramda'

import './style.css'
import PlusIcon from '../../assets/icons/plus.svg'
import LessIcon from '../../assets/icons/less.svg'
import CloseIcon from '../../assets/icons/close.svg'

const List = ({
  addItem,
  decrementItem,
  removeItem,
  data,
}) => {

  const item = ({
    id,
    image,
    title,
    price,
    quantity,
    description,
  }) => (
    <div className="list" key={id}>
      <div className="imageCircleWrapper">
        <img
          className="imageItem"
          src={image}
          alt={title}
        />
      </div>
      <div className="itemTitle">
        <h3>{title}</h3>
        <h5>{description}</h5>
        <h3>R$ {price}</h3>
      </div>
      <div className="itemPrice">
      </div>
      <div className="itemQuantity">
        <img
          onClick={() => decrementItem(id)}
          className="actionIcon"
          src={LessIcon}
          alt="less"
        />
        <span className="quantityTotal">{quantity} un</span>
        <img
          className="actionIcon"
          src={PlusIcon}
          alt="plus"
          onClick={() => addItem(id)}
        />
      </div>
      <div className="itemAmount">
        <h5>subtotal</h5>
        <h3>R$ {price*quantity},00</h3>
      </div>
      <div className="removeItem">
        <img
          onClick={() => removeItem(id)}
          className="actionIcon"
          src={CloseIcon}
          alt="remove item"
        />
      </div>
    </div>
  )
  return (
    <div className="listContentWrapper">
      {map(item, data)}
    </div>
  )
}

export default List