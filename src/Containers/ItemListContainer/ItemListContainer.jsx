import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../Data/asyncMock"
import ItemList from "../../Components/ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {

  const [products, setProducts] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {

    if (categoryId) {

      getProductsByCategory(categoryId)
        .then(res => setProducts(res))

    } else {

      getProducts()
        .then(res => setProducts(res))

    }

  }, [categoryId])

  return (
    <div>
      <h2>Products</h2>
      <ItemList products={products} />
{/* 
      {products.map(product => (
        <p key={product.id}>{product.title}</p>
      ))} */}

    </div>
  )
}

export default ItemListContainer