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

      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <Link to={`/product/${product.id}`}>
        <button>Ver detalles</button>
      </Link>

    </article>

  )

}

export default Item