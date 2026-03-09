import styles from "./Item.module.css"

const Item = ({ product }) => {

  return (

    <article className={styles.card}>

        <div>
            <img 
                className={styles.image}
                src={product.image}
                alt={product.title}
            />
        </div>

      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <button>View detail</button>

    </article>

  )

}

export default Item