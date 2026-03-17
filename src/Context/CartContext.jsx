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

  // 🔹 total de unidades en el carrito
  const getTotalQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0)
  }

  // 🔹 precio total del carrito
  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  }

  return (

    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, getTotalQuantity,
        getTotalPrice }}>

      {children}

    </CartContext.Provider>

  )

}