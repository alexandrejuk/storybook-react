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
      title: 'Do mil ao Milhão Primo Rico',
      author: 'Nigro, Thiado',
      description: "Livro de instimento e finança",
      price: 49,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyo060DJa5qRVPUWYmRUHY8T4XLCXawQdTL8_OAS8FkiVAI2Xr',
    },
    {
      id: 2,
      title: 'Os Segredos da Mente Milionária',
      author: 'Eker,T. Harv',
      description: "Aprenda A Enriquecer Mudando Seus Conceitos Sobre",
      price: 27,
      image: 'http://lojasaraiva.vteximg.com.br/arquivos/ids/3451889/1008495141.jpg?v=637039467068300000',
    },
    {
      id: 3,
      title: 'Quem Pensa Enriquece',
      author: 'Hill,Napoleon',
      description: "Livro de instimento e finança",
      price: 31,
      image: 'http://lojasaraiva.vteximg.com.br/arquivos/ids/7054936/786833.jpg?v=637076568473170000',
    },
    {
      id: 4,
      title: 'Pai Rico, Pai Pobre',
      author: 'Kiyosaki,Robert T.',
      description: "Edição de 20 Anos",
      price: 39,
      image: 'http://lojasaraiva.vteximg.com.br/arquivos/ids/5258878/1004124945.jpg?v=637060773139600000',
    },
    {
      id: 5,
      title: 'O Homem Mais Rico da Babilônia',
      author: 'Clason,George S.',
      description: "",
      price: 49,
      image: 'http://lojasaraiva.vteximg.com.br/arquivos/ids/3283904/1006831096.jpg?v=637034825928030000',
    },
    {
      id: 6,
      title: 'O Milagre Da Manhã',
      author: 'Elrod,Ha',
      description: "",
      price: 29,
      image: 'http://lojasaraiva.vteximg.com.br/arquivos/ids/6934725/624943.jpg?v=637074625928170000',
    },
    {
      id: 7,
      title: 'Box Harry Potter',
      author: 'Rowling,J. K.',
      description: "Série Completa",
      price: 144,
      image: 'http://lojasaraiva.vteximg.com.br/arquivos/ids/6979814/784387.jpg?v=637075361982100000',
    },
    {
      id: 8,
      title: 'It - A Coisa',
      author: 'King,Stephen',
      description: "",
      price: 73,
      image: 'http://lojasaraiva.vteximg.com.br/arquivos/ids/6990993/781708.jpg?v=637075473886300000',
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
