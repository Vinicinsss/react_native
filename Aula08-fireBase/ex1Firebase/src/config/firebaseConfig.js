import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD9a20FslbC2vwO7ZoH9pj5MHsoJG-uPE4",
  authDomain: "unipam-vinicius-appteste.firebaseapp.com",
  projectId: "unipam-vinicius-appteste",
  storageBucket: "unipam-vinicius-appteste.firebasestorage.app",
  messagingSenderId: "823179427605",
  appId: "1:823179427605:web:840b8af7d46a9645e7b31c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);