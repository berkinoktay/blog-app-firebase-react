// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC6BhUrVth0U5AmrYXnkZEfeYUol-B3bsg',
  authDomain: 'bitirme-odevi-92b35.firebaseapp.com',
  projectId: 'bitirme-odevi-92b35',
  storageBucket: 'bitirme-odevi-92b35.appspot.com',
  messagingSenderId: '504261864302',
  appId: '1:504261864302:web:1a267928ed812a49ae6f7f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const storage = getStorage(app);
