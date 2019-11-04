import React from 'react'
import { map } from 'ramda'
import {
  Button,
} from '../../components'
import './style.css'

const totalAmount = items => items.reduce((prev, curr) => prev + (curr.price * curr.quantity),0)
const shipping = 30

const Payment = ({
  addedItems,
}) => {
  const itemCart = ({
    id,
    image,
    title,
    price,
    quantity,
  }) => (
    <div className="listPayment" key={id}>
      <div className="imageCircleWrapper">
        <img
          className="imageItem"
          src={image}
          alt={title}
        />
      </div>
      <div className="itemTitle">
        <h3>{title}</h3>
        <h3>R$ {price},00</h3>
      </div>
      <div className="itemPrice">
      </div>
      <div className="itemQuantity">
        <span className="quantityTotal">{quantity} un</span>
      </div>
      <div className="itemAmount">
        <h5>subtotal</h5>
        <h3>R$ {price*quantity},00</h3>
      </div>
    </div>
  )

  return (
    <div>
    <h2>Pagamento</h2>
    <div className="paymentOrder">
      <div className="paymentAddress">
        <h3
          className="paymentMethodTitle"
        >
          ENDEREÇO DE ENTREGA
        </h3>
        <p> Rua Bueno Vilela, 51 - Casa</p>
        <p>Montanhão</p>
        <p>São Bernardo do Campo - SP</p>
        <p>09784-385</p>
      </div>
      <div className="paymentMethodsOption">
        <h3
          className="paymentMethodTitle"
        >
          MEUS ITENS
        </h3>
        <div className="paymentCartItems">
          {map(itemCart, addedItems)}
          <div className="amountTotalGlobalPayment">
            <h4>TOTAL + FRETE</h4>
            <h4>R$ {totalAmount(addedItems) + shipping},00</h4>
          </div>
        </div>
        <div className="paymentMethodCard">
          <h3
            className="paymentMethodTitle"
          >
            PAGUE COM CARTÃO DE CRÉDITO
          </h3>
          <form className="paymentForm">
            <div className="paymentFormGroup">
              <label className="paymentLabel">
                Número do Cartão
              </label>
              <input className="paymentInput" />
            </div>
            <div className="paymentFormGroup">
              <label className="paymentLabel">
                Nome do titular (como está gravado no Cartão)
              </label>
              <input className="paymentInput" />
            </div>
            <div className="paymentFormGroup">
              <label className="paymentLabel dateValid">
                Data de Validade
              </label>
              <input className="paymentInput dateValidInput" />
              <input className="paymentInput dateValidInput" />
            </div>
            <div className="paymentFormGroup">
              <label className="paymentLabel">
                Código de Segurança
              </label>
              <input className="paymentInput securityCode" />
            </div>
            <div className="paymentFormGroup">
              <label className="paymentLabel">
                Opções de Parcelamento
              </label>
              <input className="paymentInput" />
            </div>
            <div className="paymentAction">
              <Button
                classStyle="btnPrimary"
              >
                Concluir com cartão de crédito
              </Button>
            </div>
          </form>
        </div>
        <div className="paymentMethodCard">
          <h3 className="paymentMethodTitle">
            PAGUE COM BOLETO BANCÁRIO
          </h3>
          <h4>R$ {totalAmount(addedItems) + shipping},00</h4>
          <div>
            <p className="paymentMessage">
              Você poderá visualizar ou imprimir após a finalização do pedido. 
              A data de vencimento é de 2 dias corridos após a conclusão do pedido.
              Após esta data, ele perderá a validade.
            </p>
            <div className="paymentAction">
              <Button
                classStyle="btnPrimary"
              >
                Concluir com boleto bancário
              </Button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Payment