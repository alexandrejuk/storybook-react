import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import PaymentContainer from '../../containers/Payment'

const Payment = ({
  addedItems
}) => {
  return (
    <PaymentContainer
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

export default connect(mapStateToProps)(withRouter(Payment))
