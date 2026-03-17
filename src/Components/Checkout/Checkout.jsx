import { useState, useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"

const Checkout = () => {

  const { cart, clearCart, getTotalPrice } = useContext(CartContext)

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    phone: ""
  })

  const [orderId, setOrderId] = useState(null)

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (buyer.email !== buyer.confirmEmail) {
      alert("Los correos electrónicos no coinciden")
      return
    }

    const order = {
      buyer: {
        name: buyer.name,
        email: buyer.email,
        phone: buyer.phone
      },

      items: cart.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity
      })),

      total: getTotalPrice(),

      date: new Date()
    }

    console.log("Orden creada:", order)

    setOrderId("demo-order-123")

    clearCart()
  }

  if (cart.length === 0 && !orderId) {
    return (
      <section>
        <h2>Tu carrito está vacío</h2>
        <Link to="/">
          <button>Volver a productos</button>
        </Link>
      </section>
    )
  }

  if (orderId) {
    return (
      <section>
        <h2>¡Compra realizada con éxito!</h2>
        <p>ID de compra: {orderId}</p>
      </section>
    )
  }

  return (

    <section>

      <h2>Finalizar compra</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={buyer.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={buyer.email}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="confirmEmail"
          placeholder="Confirmar Email"
          value={buyer.confirmEmail}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Crear orden
        </button>

      </form>

    </section>

  )

}

export default Checkout