import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  const addItem = (product, quantity) => {

    const existingProduct = cart.find(item => item.id === product.id)

    if (existingProduct) {

      const updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      )

      setCart(updatedCart)

    } else {

      const newItem = {
        ...product,
        quantity
      }

      setCart([...cart, newItem])

    }

  }

  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id)
    setCart(updatedCart)
  }

  const clearCart = () => {
    setCart([])
  }

  return (

    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>

      {children}

    </CartContext.Provider>

  )

}