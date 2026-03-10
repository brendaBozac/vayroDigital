import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../Data/asyncMock"
import ItemDetail from "../../Components/ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

  const { productId } = useParams()

  const [product, setProduct] = useState(null)

  useEffect(() => {

    getProductById(productId)
      .then(response => {
        setProduct(response)
      })

  }, [productId])


  if (!product) {
    return <h2>Loading product...</h2>
  }

  return (


    <ItemDetail product={product} />


  )

}

export default ItemDetailContainer