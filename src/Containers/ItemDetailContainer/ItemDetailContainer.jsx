import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../Data/asyncMock"

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

    <div>

      <h2>{product.title}</h2>

      <img src={product.image} alt={product.title} />

      <p>${product.price}</p>

      <p>{product.description}</p>

    </div>

  )

}

export default ItemDetailContainer