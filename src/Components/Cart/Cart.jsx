/* import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"

const Cart = () => {

  const { cart } = useContext(CartContext)

  const totalPrice = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
    )

  return (

    <section>

      <h2>Carrito de compras</h2>

      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        cart.map(product => (
          <div key={product.id}>

            <h3>{product.title}</h3>

            <p>Precio: ${product.price}</p>

            <p>Cantidad: {product.quantity}</p>

            <p>Subtotal: ${product.price * product.quantity}</p>

          </div>
        ))
      )}

    </section>

  )

}

export default Cart */

import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"

const Cart = () => {

  const { cart } = useContext(CartContext)

  const totalPrice = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  )

  return (

    <section>

      <h2>Carrito de compras</h2>

      {cart.length === 0 ? (

        <p>El carrito está vacío</p>

      ) : (

        <>
          {cart.map(product => (
            <div key={product.id}>

              <h3>{product.title}</h3>

              <p>Precio: ${product.price}</p>

              <p>Cantidad: {product.quantity}</p>

              <p>Subtotal: ${product.price * product.quantity}</p>

            </div>
          ))}

          <h3>Total: ${totalPrice}</h3>

        </>

      )}

    </section>

  )

}

export default Cart