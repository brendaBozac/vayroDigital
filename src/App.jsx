import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer"
import Navbar from "./Components/Navbar/Navbar"
import { Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./Containers/ItemDetailContainer/ItemDetailContainer"
import Cart from "./Components/Cart/Cart"
import Checkout from "./Components/Checkout/Checkout"
/* 
import { useEffect } from "react"
import { seedProducts } from "./Services/seedProducts" */




function App() {
 
    /* useEffect(() => {
    console.log("App cargada")
    seedProducts()
    }, []) */

  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />

        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        <Route path="/product/:productId" element={<ItemDetailContainer />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />
        
      </Routes>
      
  
    </>
  )
}



export default App
