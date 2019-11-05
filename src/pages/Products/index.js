import React from 'react'
import { connect } from 'react-redux'

import { addItemToCard } from '../../components/actions/cart'
import ProductsContainer from '../../containers/Products'

const Products = ({
  addCartItem,
  items,
}) => {
  return (
    <ProductsContainer
      addCartItem={addCartItem}
      products={items}
    />
  )
}

const mapStateToProps = (state)=> {
  const { products: { items } } = state
  return {
    items
  }
}

const mapDispatchToProps= (dispatch)=>{
  return {
    addCartItem: id => dispatch(addItemToCard(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
