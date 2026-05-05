import { useState, useEffect } from "react"
// import { getProducts, getProductsByCategory } from "../../Data/asyncMock"
import ItemList from "../../Components/ItemList/ItemList"
import { useParams } from "react-router-dom"
import styles from "./ItemListContainer.module.css"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../servicios/db"


const ItemListContainer = () => {

  const [products, setProducts] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {

  const productsRef = collection(db, "products")

  const q = categoryId
    ? query(productsRef, where("category", "==", categoryId))
    : productsRef

  getDocs(q)
    .then(snapshot => {

      const productsAdapted = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))

      setProducts(productsAdapted)

    })

}, [categoryId])

  return (
  
    <div className={styles.container}>
      <h2 className={styles.title}>Productos</h2>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer