import { FaShoppingCart } from "react-icons/fa"
import styles from "./CartWidget.module.css"

const CartWidget = () => {

  return (
    <div className={styles.cart}>
      <FaShoppingCart />
      <span className={styles.counter}>0</span>
    </div>
  )

}

export default CartWidget