import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
// import { getProductById } from "../../Data/asyncMock"
import ItemDetail from "../../Components/ItemDetail/ItemDetail"

import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/db"

const ItemDetailContainer = () => {

  const { productId } = useParams()

  const [product, setProduct] = useState(null)

    useEffect(() => {

    const { itemId } = useParams()

    const docRef = doc(db, "products", itemId)

    getDoc(docRef)
      .then(res => {

        const product = {
          id: res.id,
          ...res.data()
        }

        setProduct(product)

      })

  }, [itemId])


  if (!product) {
    return <h2>Loading product...</h2>
  }

  return (


    <ItemDetail product={product} />


  )

}

export default ItemDetailContainer