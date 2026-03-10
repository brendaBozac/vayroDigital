import styles from "./ItemDetail.module.css"

const ItemDetail = ({ product }) => {

  return (

    <article className={styles.detail}>

      <img 
        src={product.image}
        alt={product.title}
        className={styles.image}
      />

      <h2>{product.title}</h2>

      <p className={styles.price}>${product.price}</p>

      <p className={styles.description}>
        {product.description}
      </p>

    </article>

  )

}

export default ItemDetail