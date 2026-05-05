import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import styles from "./Cart.module.css"

const Cart = () => {
  const { cart, removeItem, clearCart, getTotalPrice } = useContext(CartContext)
  const totalPrice = getTotalPrice() 

  return (
    <section className={styles.cart}>
      <h2 className={styles.title}>Carrito de compras</h2>

      {cart.length === 0 ? (
        <p className={styles.emptyCart}>El carrito está vacío</p>
      ) : (
        <>
          <div className={styles.productList}>
            {cart.map(product => (
              <div key={product.id} className={styles.productItem}>
                {/* Imagen miniatura */}
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className={styles.productImage} 
                />
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.productPrice}>Precio: ${product.price}</p>
                <p className={styles.productQuantity}>Cantidad: {product.quantity}</p>
                <p className={styles.productSubtotal}>Subtotal: ${product.price * product.quantity}</p>
                <button 
                  className={styles.removeButton}
                  onClick={() => removeItem(product.id)}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>

          <div className={styles.totalSection}>
            <h3 className={styles.totalText}>
              Total: <span>${totalPrice}</span>
            </h3>
          </div>

          <div className={styles.actions}>
            <Link to="/checkout">
              <button className={styles.checkoutButton}>Finalizar compra</button>
            </Link>
            <button className={styles.clearButton} onClick={clearCart}>
              Vaciar carrito
            </button>
          </div>
        </>
      )}
    </section>
  )
}

export default Cart