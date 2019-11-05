import React, { Fragment } from 'react'
import './style.css'

const Order = ({
  orders,
  history,
}) => {
  return (
    <Fragment>
      <h3>Meus Pedidos</h3>
      <div className="listOrder">
        <div className="imageCircleWrapper">
          <img
            className="imageItem"
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr'
            alt="image"
          />
        </div>
        <div className="itemTitle">
          <h3>Addidas</h3>
          <h3>R$ 100,00</h3>
        </div>
        <div className="itemTitle">
          <h3>Status <br /> Entregue</h3>
        </div>
        <div className="itemPrice">
        </div>
        <div className="itemQuantity">
          <span className="quantityTotal">1 un</span>
        </div>
        <div className="itemAmount">
          <h5>subtotal</h5>
          <h3>R$ 100,00</h3>
        </div>
      </div>
    </Fragment>
  )
}

export default Order
