import styles from "./Item.module.css"
import { Link } from "react-router-dom"

const Item = ({ product }) => {

  return (
    <article className={styles.card}>
      <div>
        <img 
          className={styles.image}
          src={product.img}
          alt={product.title}
        />
      </div>

      <h3 className={styles.productTitle}>{product.title}</h3>

      <p className={styles.price}>${product.price}</p>

      <Link to={`/product/${product.id}`}>
        <button className={styles.button}>Ver detalles</button>
      </Link>
    </article>
  )
}

export default Item