import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCVfq5RSk99khfG-a-d3JDvC1EkmncdZ4Y',
  authDomain: 'house-marketplace-8e1a3.firebaseapp.com',
  projectId: 'house-marketplace-8e1a3',
  storageBucket: 'house-marketplace-8e1a3.appspot.com',
  messagingSenderId: '392964151895',
  appId: '1:392964151895:web:a39f1bb7dc4a241147e112',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
