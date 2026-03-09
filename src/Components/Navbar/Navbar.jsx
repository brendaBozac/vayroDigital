import styles from "./Navbar.module.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const Navbar = () => {

  return (

    <nav className={styles.navbar}>

        <h1 className={styles.logo}>Vayro Digital</h1>

        <ul className={styles.menu}>

            <li>
                <Link to="/category/electronics">Electronics</Link>
            </li>

            <li>
                <Link to="/category/jewelery">Jewelery</Link>
            </li>

            <li>
                <Link to="/category/men's clothing">Men's clothing</Link>
            </li>

            <li>
                <Link to="/category/women's clothing">Women's clothing</Link>
            </li>

        </ul>

        <CartWidget />

    </nav>

  )

}

export default Navbar