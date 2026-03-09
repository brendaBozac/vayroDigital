/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' */

import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer"
import Navbar from "./Components/Navbar/Navbar"

function App() {
 

  return (
    <>

      <Navbar />

      <div>
      <ItemListContainer />
      </div>
      
  
    </>
  )
}

export default App
