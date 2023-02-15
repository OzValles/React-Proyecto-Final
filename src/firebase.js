import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyALvaxkAK6EVdGL6wk8XkcEmJFx0kYDtAU",
  authDomain: "wabi-sabi-14e7b.firebaseapp.com",
  databaseURL: "https://wabi-sabi-14e7b-default-rtdb.firebaseio.com",
  projectId: "wabi-sabi-14e7b",
  storageBucket: "wabi-sabi-14e7b.appspot.com",
  messagingSenderId: "153110791448",
  appId: "1:153110791448:web:8639bbc94f079b5b6c4a6d",
  measurementId: "G-3C6J89NP51"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)