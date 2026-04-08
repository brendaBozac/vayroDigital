import { useState, useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"

import { addDoc, collection, serverTimestamp, doc, updateDoc } from "firebase/firestore"
import { db } from "../../Services/db"

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

      date: serverTimestamp()  //Esto usa el tiempo del servidor de Cloud Firestore
    }

     addDoc(collection(db, "orders"), order)
  .then((docRef) => {

    // actualizar stock de cada producto
    cart.forEach(item => {

      const productRef = doc(db, "products", item.id)

      updateDoc(productRef, {
        stock: item.stock - item.quantity
      })

    })

    setOrderId(docRef.id)
    clearCart()

  })
  .catch(error => {
    console.error("Error creando la orden:", error)
  })
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
        <h3>Gracias por tu compra</h3>
        <p>Te enviaremos un email con toda la informacion para el seguimiento de tu operación.</p>
        <p>Tu número de orden es: {orderId}</p>

        <Link to="/">
          <button>Volver al inicio</button>
        </Link>
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