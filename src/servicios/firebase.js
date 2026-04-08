import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "vayro-backend.firebaseapp.com",
  projectId: "vayro-backend",
  storageBucket: "vayro-backend.firebasestorage.app",
  messagingSenderId: "305942201628",
  appId: "1:305942201628:web:740b3252c737b6be97a6d9"
}

export const app = initializeApp(firebaseConfig)