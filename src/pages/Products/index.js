import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import {
  addItemToCard,
  getProducts,
} from '../../components/actions/cart'
import ProductsContainer from '../../containers/Products'

const Products = ({
  addCartItem,
  getAllProducts,
  items,
}) => {
  const products = [
    {
      id: 1,
      title: 'Winter body',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
    },
    {
      id: 2,
      title: 'Adidas',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
    },
    {
      id: 3,
      title: 'Vans',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
    },
    {
      id: 4,
      title: 'White',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
    },
    {
      id: 5,
      title: 'Cropped-sho',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
    },
    {
      id: 6,
      title: 'Blues',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
    },
    {
      id: 7,
      title: 'White',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
    },
    {
      id: 8,
      title: 'Cropped-sho',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
    },
    {
      id: 9,
      title: 'Blues',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
    },     {
      id: 10,
      title: 'White',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
    },
    {
      id: 11,
      title: 'Cropped-sho',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
    },
    {
      id: 12,
      title: 'Blues',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
    },
]
  useEffect(() => {
    getAllProducts(products)
  }, [])
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
    getAllProducts: products => dispatch(getProducts(products)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
