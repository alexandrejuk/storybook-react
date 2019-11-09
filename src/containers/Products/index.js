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
    author,
    image,
    description,
    price,
  }) => (
    <Card
      key={id}
      id={id}
      description={description}
      title={title}
      author={author}
      image={image}
      price={price}
      onClick={addCartItem}
    />
  )

  return (
    <div className="contentProductsMain">
      <div className="slider">
        <img src="https://lojasaraiva.vteximg.com.br/arquivos/ids/3446498/1109_tv_niver_saraiva_ebooks.jpg?v=637040025316170000" alt="slider" />
      </div>
      {map(productItem, products)}
    </div>
  )
}

export default Products