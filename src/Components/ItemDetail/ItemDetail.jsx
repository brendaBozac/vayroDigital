import styles from "./ItemDetail.module.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const { cart, addItem } = useContext(CartContext);
  const itemInCart = cart.find((item) => item.id === product.id);
  const [quantityAdded, setQuantityAdded] = useState(0);

  if (!product) return <p className={styles.loading}>Cargando producto...</p>;

  const handleAdd = (quantity) => {
    addItem(product, quantity);
    setQuantityAdded(quantity);
  };

  const stockAvailable = itemInCart
    ? product.stock - itemInCart.quantity
    : product.stock;

  return (
    <article className={styles.detail}>
      <img
        src={product.img}
        alt={product.title}
        className={styles.image}
      />

      <div className={styles.info}>
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.price}>${product.price}</p>
        <p className={styles.description}>{product.description}</p>

        <p className={styles.stock}>Stock disponible: {product.stock}</p>

        {itemInCart && (
          <p className={styles.cartMessage}>
            Ya tienes {itemInCart.quantity} en el carrito
          </p>
        )}

        {product.stock > 0 && product.stock <= 3 && (
          <p className={styles.lowStock}>⚠ Últimas unidades disponibles</p>
        )}

        <div className={styles.actions}>
          {/* CASO 1: ya agregaste algo en esta sesión */}
          {quantityAdded > 0 && (
            <>
              <p className={styles.successMessage}>Producto agregado al carrito</p>
              <div className={styles.buttonGroup}>
                <Link to="/cart">
                  <button className={styles.button}>Ir al carrito</button>
                </Link>
                <Link to="/">
                  <button className={styles.buttonOutline}>Seguir comprando</button>
                </Link>
              </div>
            </>
          )}

          {/* CASO 2: ya alcanzaste el máximo disponible */}
          {quantityAdded === 0 && stockAvailable === 0 && (
            <>
              <p className={styles.warningMessage}>
                Ya agregaste todas las unidades disponibles
              </p>
              <div className={styles.buttonGroup}>
                <Link to="/cart">
                  <button className={styles.button}>Ir al carrito</button>
                </Link>
                <Link to="/">
                  <button className={styles.buttonOutline}>Seguir comprando</button>
                </Link>
              </div>
            </>
          )}

          {/* CASO 3: todavía puede agregar */}
          {quantityAdded === 0 && stockAvailable > 0 && (
            <ItemCount
              initial={1}
              stock={stockAvailable}
              onAdd={handleAdd}
            />
          )}
        </div>
      </div>
    </article>
  );
};

export default ItemDetail;