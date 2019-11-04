import React from 'react'
import { map } from 'ramda'
import { Card } from '../../components/'
import './style.css'

const Products = ({
  addCartItem,
  products,
}) => {
  const productItem = ({
    id,
    title,
    image,
    description,
    price,
  }) => (
    <Card
      key={id}
      id={id}
      description={description}
      title={title}
      image={image}
      price={price}
      onClick={addCartItem}
    />
  )

  return (
    <div className="contentProductsMain">
      {map(productItem, products)}
    </div>
  )
}

export default Products