import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import CartIcon from '../../assets/icons/cart.svg'
import './style.css'

const NavBar = ({
  cartItems,
}) => (
  <Fragment>
    <div class="navbar">
      <div class="nav-wrapper">
        <Link to="/">
          <div class="logo">
            <img 
              src="http://i2.wp.com/perfilwe.com.br/wp-content/uploads/2017/04/Saraiva-cupom.png?fit=700%2C309" alt=""
            />
          </div>
        </Link>
        <Link to="/checkout">
          <div
            className="cardIconWrapper"
            >
            <img
              className="cardIcon"
              src={CartIcon}
              alt="shopping cart"
              />
            <span
              className="cartTotal"
              >
              {
                cartItems > 9 ? '+9' : cartItems
              }
            </span>
          </div>
        </Link>
      </div>
    </div>
    <div className="navbar navList">
      <div className="nav-wrapper nav-white">
        <ul>
          <li>Livros</li>
          <li>Brinquedos</li>
          <li>Games</li>
        </ul>
      </div>
    </div>
  </Fragment>
)

const mapStateToProps = (state)=>{
  const { addedItems } = state
  const cartItems = addedItems.reduce((prev, curr) => (prev + curr.quantity),0)
  return {
    cartItems
  }
}

export default connect(mapStateToProps)(NavBar)