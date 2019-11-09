import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { resetCart } from '../../components/actions/cart'
import { addOrder } from '../../components/actions/order'
import PaymentContainer from '../../containers/Payment'

const Payment = ({
  addedItems,
  logged,
  newOrder,
  resetCartItems,
  history,
}) => {

  const [card, setCard] = useState({})

  useEffect(() => {
    if (!logged) {
      return history.push('login')
    }
    if (addedItems.length === 0) {
      return history.push('/')
    }
  }, [history])


  const handleChange = (event) => {
    const { name, value } = event.target
    setCard({...card, [name]: value })
  }


  const finishOrderBoleto = () => {
    const order = {
      user: logged,
      items: addedItems,
      paymentMethod: 'Boleto',
      date: new Date(),
      status: 'aguardando pagamento',
    }
    newOrder(order)
    resetCartItems()
    return history.push('order')
  }

  const finishCard = () => {
    const order = {
      card,
      user: logged,
      items: addedItems,
      paymentMethod: 'Cartão de crédito',
      date: new Date(),
      status: 'pagamento confirmado',
    }
    newOrder(order)
    resetCartItems()
    return history.push('order')
  }

  return (
    <PaymentContainer
      resetCartItems={resetCartItems}
      finishOrderBoleto={finishOrderBoleto}
      finishCard={finishCard}
      addedItems={addedItems}
      handleChange={handleChange}
      address={logged}
    />
  )
}

const mapStateToProps = (state) => {
  const {
    login: { logged },
    products: { addedItems },
  } = state
  return {
    addedItems,
    logged,
  }
}

const mapDispatchToProps= (dispatch)=>{
  return {
    newOrder: payload => dispatch(addOrder(payload)),
    resetCartItems: () => dispatch(resetCart()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Payment))