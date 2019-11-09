import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loggout } from '../actions/login'
import CartIcon from '../../assets/icons/cart.svg'
import UserIcon from '../../assets/icons/user.svg'
import './style.css'

const NavBar = ({
  logged,
  loggoutUser,
  cartItems,
}) => (
  <Fragment>
    <div className="navbar">
      <div className="nav-wrapper">
        <Link to="/">
          <div className="logo">
            <img
              src="http://i2.wp.com/perfilwe.com.br/wp-content/uploads/2017/04/Saraiva-cupom.png?fit=700%2C309" alt=""
            />
          </div>
        </Link>
       <div className="actionNavBar">
            <div className="loginSingUp">
              {
                logged
                  ?
                    <h5>{logged.fullName}
                      <button className="loggout-btn"
                        onClick={loggoutUser}>
                        Sair
                      </button>
                    </h5>
                  :
                    <Link to="login">
                      <img className="loginIcon" src={UserIcon} alt="icon login"/>
                      <h5>Entre ou <br/> cadastre-se</h5>
                    </Link>
              }
            </div>
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
    </div>
    <div className="navbar navList">
      <div className="nav-wrapper nav-white">
        <ul>
          <li>Finaceiro</li>
          <li>Técnologia</li>
          <li>Games</li>
          <li>Idiomas</li>
        </ul>
      </div>
    </div>
  </Fragment>
)

const mapStateToProps = (state) => {
  const { login: { logged }, products: { addedItems } } = state
  const cartItems = addedItems.reduce((prev, curr) => (prev + curr.quantity),0)
  return {
    cartItems,
    logged,
  }
}

const mapDispatchToProps= (dispatch)=>{
  return {
    loggoutUser: () => dispatch(loggout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
