import styles from "./Navbar.module.css"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {

  return (

    <nav className={styles.navbar}>

      <h1 className={styles.logo}>Vayro Digital</h1>

      <ul className={styles.menu}>
        <li>Electronics</li>
        <li>Jewelery</li>
        <li>Men's clothing</li>
        <li>Women's clothing</li>
      </ul>

      <CartWidget />

    </nav>

  )

}

export default Navbar