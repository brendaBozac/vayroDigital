import styles from "./ItemDetail.module.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ product }) => {

    const handleAdd = (quantity) => {
        console.log("Cantidad agregada:", quantity)
    }

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

            <ItemCount onAdd={handleAdd} />

        </article>

    )

}




export default ItemDetail