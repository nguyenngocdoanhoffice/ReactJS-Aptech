import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './ProductList'
import Cart from './Cart'
import { Provider } from 'react-redux'
import store from './store'
function App() {

  return (
    <Provider store={store}>
      <ProductList />
      <Cart />
    </Provider>

  )
}

export default App
