import styles from "./Navbar.module.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const Navbar = () => {

  return (

    <nav className={styles.navbar}>

        <h1 className={styles.logo}>
            <Link to="/">Vayro Digital</Link>
        </h1>

        <ul className={styles.menu}>

            <li>
                <Link to="/category/notebooks">Notebooks</Link>
            </li>

            <li>
                <Link to="/category/smartphones">Smartphones</Link>
            </li>

            <li>
                <Link to="/category/audio">Audio</Link>
            </li>

            <li>
                <Link to="/category/accessories">Accessories</Link>
            </li>

        </ul>

        <CartWidget />

    </nav>

  )

}

export default Navbar