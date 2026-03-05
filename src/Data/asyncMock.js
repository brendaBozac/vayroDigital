// 1 Imagen placeholder

const placeholderImage = "https://picsum.photos/300"


// 2 Categorías

export const categorias = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing"
]


// 3 Base de datos simulada

export const productos = [

  {
    id: 1,
    title: "Wireless Headphones",
    price: 120,
    description: "High quality wireless headphones",
    category: "electronics",
    image: placeholderImage
  },

  {
    id: 2,
    title: "Bluetooth Speaker",
    price: 80,
    description: "Portable bluetooth speaker",
    category: "electronics",
    image: placeholderImage
  },

  {
    id: 3,
    title: "Smart Watch",
    price: 150,
    description: "Modern smartwatch with health tracking",
    category: "electronics",
    image: placeholderImage
  },

  {
    id: 4,
    title: "Gold Necklace",
    price: 250,
    description: "Elegant gold necklace",
    category: "jewelery",
    image: placeholderImage
  },

  {
    id: 5,
    title: "Silver Ring",
    price: 90,
    description: "Minimalist silver ring",
    category: "jewelery",
    image: placeholderImage
  },

  {
    id: 6,
    title: "Diamond Earrings",
    price: 400,
    description: "Luxury diamond earrings",
    category: "jewelery",
    image: placeholderImage
  },

  {
    id: 7,
    title: "Men's Casual T-Shirt",
    price: 35,
    description: "Comfortable cotton t-shirt",
    category: "men's clothing",
    image: placeholderImage
  },

  {
    id: 8,
    title: "Men's Denim Jacket",
    price: 95,
    description: "Classic denim jacket",
    category: "men's clothing",
    image: placeholderImage
  },

  {
    id: 9,
    title: "Men's Sneakers",
    price: 110,
    description: "Stylish everyday sneakers",
    category: "men's clothing",
    image: placeholderImage
  },

  {
    id: 10,
    title: "Women's Summer Dress",
    price: 75,
    description: "Light and elegant summer dress",
    category: "women's clothing",
    image: placeholderImage
  },

  {
    id: 11,
    title: "Women's Handbag",
    price: 130,
    description: "Modern everyday handbag",
    category: "women's clothing",
    image: placeholderImage
  },

  {
    id: 12,
    title: "Women's Sneakers",
    price: 105,
    description: "Comfortable lifestyle sneakers",
    category: "women's clothing",
    image: placeholderImage
  }

]


export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos)
    }, 500)
  })
}


export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find(prod => prod.id === Number(productId)))
    }, 500)
  })
}


export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.filter(prod => prod.category === categoryId))
    }, 500)
  })
}