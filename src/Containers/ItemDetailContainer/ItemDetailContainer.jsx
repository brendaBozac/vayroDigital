import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

  const { productId } = useParams()

  console.log(productId)

  return (
    <h2>Detalle del producto {productId}</h2>
  )
}

export default ItemDetailContainer