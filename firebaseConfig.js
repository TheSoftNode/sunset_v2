// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCA_gg79CWU7-uVekpzrFybkyuX9nCc_ls",
  authDomain: "susnet-db9d1.firebaseapp.com",
  databaseURL: "https://susnet-db9d1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "susnet-db9d1",
  storageBucket: "susnet-db9d1.appspot.com",
  messagingSenderId: "1020628957229",
  appId: "1:1020628957229:web:82a35e0d0bb711e8d1e0a4",
  measurementId: "G-60KBL12DER"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database };
