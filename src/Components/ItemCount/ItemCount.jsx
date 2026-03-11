import { useState } from "react"
import styles from "./ItemCount.module.css"

const ItemCount = ({ onAdd }) => {

    console.log("ItemCount render")

  const [count, setCount] = useState(1)

  const increment = () => {
    if (count < 9) {
      setCount(count + 1)
    }
  }

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (

    <div className={styles.container}>

        {/* <h3>CONTADOR</h3> */}

      <div className={styles.counter}>

        <button onClick={decrement}>-</button>

        <span>{count}</span>

        <button onClick={increment}>+</button>

      </div>

      <button
        className={styles.addButton}
        onClick={() => onAdd(count)}
      >
        Agregar al carrito
      </button>

    </div>

  )

}

export default ItemCount