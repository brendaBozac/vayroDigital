import { FaShoppingCart } from "react-icons/fa"
import styles from "./CartWidget.module.css"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {

  const { cart } = useContext(CartContext)

  console.log("cartWidget cart:", cart)

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (

    <Link to="/cart" className={styles.cart}>
      <FaShoppingCart />
      <span className={styles.counter}>{totalQuantity}</span>
    </Link>

  )

}

export default CartWidget