import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'
import { addItemToCard } from './components/actions/cart'

const App = ({
  addCartItem,
  items,
}) => {
  const addItem = id => addCartItem(id)

  const item = item => (
    <div key={item.id}>
      {item.title}
      <button
        onClick={() => addItem(item.id)}
      >
        Adicionar
      </button>
    </div>
  )

  return (
    <div>
      {map(item, items)}
    </div>
  )
}

const mapStateToProps = (state)=>{
  const { items } = state
  return {
    items
  }
}

const mapDispatchToProps= (dispatch)=>{
  return {
    addCartItem: id => dispatch(addItemToCard(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
