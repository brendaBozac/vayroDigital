import { useState, useEffect } from "react"
import { getProducts } from "../../Data/asyncMock"


const ItemListContainer = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {

    getProducts()
      .then((res) => {
        setProducts(res)
      })

  }, [])

  return (
    <div>
      <h2>Products</h2>

      {products.map(product => (
        <p key={product.id}>{product.title}</p>
      ))}

    </div>
  )
}

export default ItemListContainer