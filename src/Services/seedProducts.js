import { collection, addDoc } from "firebase/firestore"
import { db } from "./db"

const products = [
  {
    title: "Wireless Headphones",
    price: 120,
    description: "High quality wireless headphones",
    category: "electronics",
    stock: 10,
    img: "https://picsum.photos/300"
  },
  {
    title: "Smart Watch",
    price: 95,
    description: "Water resistant smartwatch",
    category: "electronics",
    stock: 8,
    img: "https://picsum.photos/300"
  },
  {
    title: "Men T-Shirt",
    price: 25,
    description: "Comfortable cotton t-shirt",
    category: "men's clothing",
    stock: 20,
    img: "https://picsum.photos/300"
  },
  {
    title: "Women's Jacket",
    price: 80,
    description: "Lightweight stylish jacket",
    category: "women's clothing",
    stock: 5,
    img: "https://picsum.photos/300"
  },
  {
    title: "Silver Necklace",
    price: 60,
    description: "Elegant silver necklace",
    category: "jewelery",
    stock: 6,
    img: "https://picsum.photos/300"
  }
]

export const seedProducts = () => {
  const productsRef = collection(db, "products")

  products.forEach(product => {
    addDoc(productsRef, product)
  })
}