import styles from "./ItemDetail.module.css"
import ItemCount from "../ItemCount/ItemCount"

import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({ product }) => {

    const { cart, addItem } = useContext(CartContext)

    const itemInCart = cart.find(item => item.id === product.id)

    const [quantityAdded, setQuantityAdded] = useState(0)

    if (!product) return <p>Cargando producto...</p>

    const handleAdd = (quantity) => {
        addItem(product, quantity)
        setQuantityAdded(quantity)
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

            {itemInCart && (
                <p>Ya tienes {itemInCart.quantity} en el carrito</p>
            )}

            {quantityAdded > 0 ? (

                <div>

                    <p>Producto agregado al carrito</p>

                    <Link to="/cart">
                        <button>Ir al carrito</button>
                    </Link>

                    <Link to="/">
                        <button>Seguir comprando</button>
                    </Link>

                </div>

            ) : (

                <ItemCount
                    initial={1}
                    stock={10}
                    onAdd={handleAdd}
                />

            )}

        </article>

    )
}

export default ItemDetail