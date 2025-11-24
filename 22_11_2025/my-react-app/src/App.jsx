import { useState } from 'react'
import './App.css'
import Header from './Header'
import ProductList from './ProductList'
import Cart from './Cart'

function App() {

  return (
    <>
      <div className="container">
        <Cart />
        <ProductList />
      </div>
    </>
  )
}

export default App
