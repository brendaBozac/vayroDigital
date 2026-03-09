import styles from "./Navbar.module.css"

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

      <div className={styles.cart}>
        🛒 0
      </div>

    </nav>

  )

}

export default Navbar