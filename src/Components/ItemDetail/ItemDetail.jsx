import styles from "./ItemDetail.module.css"
import ItemCount from "../ItemCount/ItemCount"

import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"

const ItemDetail = ({ product }) => {

    const { addItem } = useContext(CartContext)

    const handleAdd = (quantity) => {
        addItem(product, quantity)
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