/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' */

import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer"
import Navbar from "./Components/Navbar/Navbar"
import { Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./Containers/ItemDetailContainer/ItemDetailContainer"
import Cart from "./Components/Cart/Cart"

function App() {
 

  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />

        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        <Route path="/product/:productId" element={<ItemDetailContainer />} />

        <Route path="/cart" element={<Cart />} />
        
      </Routes>
      
  
    </>
  )
}

export default App
