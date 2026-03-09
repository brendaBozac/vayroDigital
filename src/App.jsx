/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' */

import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer"
import Navbar from "./Components/Navbar/Navbar"
import { Routes, Route } from "react-router-dom"

function App() {
 

  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />

        <Route path="/category/:categoryId" element={<ItemListContainer />} />
      </Routes>
      
  
    </>
  )
}

export default App
