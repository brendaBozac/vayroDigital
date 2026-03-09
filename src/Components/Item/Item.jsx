const Item = ({ product }) => {

  return (
    <div>
      <h3>{product.title}</h3>

      <img 
        src={product.image} 
        alt={product.title}
        width="200"
      />

      <p>Price: ${product.price}</p>

      <button>View detail</button>
    </div>
  )

}

export default Item