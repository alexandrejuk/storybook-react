import React, { Fragment } from 'react'
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
      { addedItems.length > 0 
        ? <List
          data={addedItems}
          addItem={addCartItem}
          decrementItem={decrementCartItem}
          removeItem={removeCartItem}
        />
        : <h2>
            Seu carrinho está vazio <br />
            <a href="/#/">
              Continuar navegando
            </a>
          </h2>
      }
      <div className="checkoutShipping">
        <div className="amountTotalCart">
          <h5>Subtotal</h5>
          <h5>R$ {totalAmount(addedItems)},00</h5>
        </div>
        <div className="amountTotalShiping">
          { addedItems.length > 0 
            ? <Fragment>
                <h5>Entrega</h5>
                <h5>R$ {shipping},00</h5>
              </Fragment>
            : null
          }
        </div>
        <div className="amountTotalGlobal">
        { addedItems.length > 0 
            ? <Fragment>
                <h4>TOTAL</h4>
                <h4>R$ {totalAmount(addedItems) + shipping },00</h4>
              </Fragment>
            : null
        }
        </div>
        <div>
          <a href="/#/">
            Comprar mais produtos
          </a>
          <Button
            classStyle="btnPrimary"
            onClick={() => history.push('payment')}
          >
            FINALIZAR PEDIDO
          </Button>
        </div>
      </div>
    </div>
  </Fragment>
)

export default Checkout
