import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJe6HnSxS1aDZ_gkqB_vFt2ww_ybWPS6U",
    authDomain: "house-listings-app-961d9.firebaseapp.com",
    projectId: "house-listings-app-961d9",
    storageBucket: "house-listings-app-961d9.appspot.com",
    messagingSenderId: "722484369995",
    appId: "1:722484369995:web:815ce29614f8c8c7b28bce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();