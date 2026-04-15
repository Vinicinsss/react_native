import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDxvMA6XuAWnTKJrF8UjQKBkxXK1wo9EDE",
  authDomain: "pratica02-viniciussantos.firebaseapp.com",
  projectId: "pratica02-viniciussantos",
  storageBucket: "pratica02-viniciussantos.firebasestorage.app",
  messagingSenderId: "570813929724",
  appId: "1:570813929724:web:19decbf08d85d3369c1f79"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);