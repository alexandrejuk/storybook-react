import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import {
  Button,
  List,
} from '../../components'
import './style.css'

const totalAmount = items => items.reduce((prev, curr) => prev + (curr.price * curr.quantity),0)
const shipping = 30

const Checkout = ({
  addedItems,
  addCartItem,
  decrementCartItem,
  removeCartItem,
  history,
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
        <div className="amountTotalCart">
          <h5>Subtotal</h5>
          <h5>R$ {totalAmount(addedItems)}</h5>
        </div>
        <div className="amountTotalShiping">
          <h5>Entrega</h5>
          <h5>R$ {shipping}</h5>
        </div>
        <div className="amountTotalGlobal">
          <h4>TOTAL</h4>
          <h4>R$ {totalAmount(addedItems) + shipping }</h4>
        </div>
        <div>
          <a href="/#/products">
            Comprar mais produtos
          </a>
          <Button
            classStyle="btnPrimary"
            onClick={() => history.push('products')}
          >
            FINALIZAR PEDIDO
          </Button>
        </div>
      </div>
    </div>
  </Fragment>
)

export default withRouter(Checkout)
