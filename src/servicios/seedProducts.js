const products = [

  {
    category: "notebooks",
    title: "Portátil HP Elitebook 845 G8 Ryzen 5 Pro 5650U",
    price: 484496,
    description: "Notebook HP EliteBook con procesador Ryzen 5 Pro 5650U, 16GB RAM, 256GB SSD y Windows 11 Pro.",
    stock: 12,
    img: "/images/pc1.webp"
  },

  {
    category: "notebooks",
    title: "Notebook Ryzen 5 3500U 16GB RAM 256GB SSD",
    price: 795000,
    description: "Notebook con procesador AMD Ryzen 5 3500U, 16GB RAM y pantalla de 15.6 pulgadas.",
    stock: 10,
    img: "/images/pc2.webp"
  },

  {
    category: "notebooks",
    title: "Notebook Dell Inspiron 3535 Ryzen 5 7520U",
    price: 1050899,
    description: "Notebook Dell Inspiron con Ryzen 5 7520U, 8GB LPDDR5, SSD 512GB y pantalla Full HD 15.6 pulgadas.",
    stock: 8,
    img: "/images/pc3.webp"
  },

  {
    category: "notebooks",
    title: "Notebook Dell Inspiron 14 5440 Intel i5",
    price: 1973199,
    description: "Notebook Dell con Intel Core i5 1334U, 32GB DDR5, SSD 512GB y pantalla 14 pulgadas Full HD+.",
    stock: 6,
    img: "/images/pc4.webp"
  },

  {
    category: "smartphones",
    title: "Apple iPhone 16 128GB Negro",
    price: 1799999,
    description: "iPhone 16 con almacenamiento de 128GB y alto rendimiento.",
    stock: 15,
    img: "/images/cel1.webp"
  },

  {
    category: "smartphones",
    title: "Motorola Moto G15 256GB Sunrise Orange",
    price: 334729,
    description: "Motorola Moto G15 con gran autonomía y 256GB de almacenamiento.",
    stock: 18,
    img: "/images/cel2.webp"
  },

  {
    category: "smartphones",
    title: "Samsung Galaxy A16 128GB 4GB RAM",
    price: 315000,
    description: "Samsung Galaxy A16 con pantalla de 6.7 pulgadas y 128GB de almacenamiento.",
    stock: 20,
    img: "/images/cel3.webp"
  },

  {
    category: "smartphones",
    title: "Apple iPhone 15 128GB Negro",
    price: 1549999,
    description: "iPhone 15 con excelente rendimiento y cámara avanzada.",
    stock: 10,
    img: "/images/cel4.webp"
  },

  {
    category: "audio",
    title: "Auriculares Logitech Pro X 7.1",
    price: 315499,
    description: "Auriculares gamer Logitech con sonido envolvente 7.1.",
    stock: 16,
    img: "/images/sonido1.webp"
  },

  {
    category: "audio",
    title: "Parlante Logitech S150 USB",
    price: 35499,
    description: "Parlante compacto USB ideal para escritorio o notebook.",
    stock: 25,
    img: "/images/sonido2.webp"
  },

  {
    category: "audio",
    title: "Auriculares Gamer T-Dagger Sona RGB",
    price: 63462,
    description: "Auriculares gamer con iluminación RGB y sonido 7.1.",
    stock: 14,
    img: "/images/sonido3.webp"
  },

  {
    category: "audio",
    title: "Auriculares Gamer Gadnic HP63 Inalámbricos",
    price: 32149,
    description: "Auriculares inalámbricos Bluetooth con batería de 10 horas.",
    stock: 18,
    img: "/images/sonido4.webp"
  },

  {
    category: "accessories",
    title: "Router Mercusys MR30G AC1200",
    price: 36500,
    description: "Router dual band AC1200 con puertos Gigabit.",
    stock: 22,
    img: "/images/accesorios1.webp"
  },

  {
    category: "accessories",
    title: "Disco Externo Seagate Portable 5TB",
    price: 397470,
    description: "Disco duro externo portátil USB 3.0 de 5TB.",
    stock: 13,
    img: "/images/accesorios2.webp"
  },

  {
    category: "accessories",
    title: "Drone DJI Neo Fly More Combo",
    price: 719000,
    description: "Drone compacto con cámara 4K, 3 baterías y control RC N3.",
    stock: 5,
    img: "/images/accesorios3.webp"
  },

  {
    category: "accessories",
    title: "Cámara Canon EOS R50 Mirrorless",
    price: 2392000,
    description: "Cámara mirrorless profesional compacta y ligera ideal para fotografía y video.",
    stock: 4,
    img: "/images/accesorios4.webp"
  }

]

import { collection, addDoc } from "firebase/firestore"
import { db } from "./db"

export const seedProducts = async () => {

  const productsCollection = collection(db, "products")

  for (const product of products) {
    await addDoc(productsCollection, product)
  }

  console.log("Productos cargados correctamente")
}