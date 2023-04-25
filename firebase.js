// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import {
    getFirestore, 
    collection, 
    addDoc 
} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKBj_jGe7OYW8BiWIX4lalZVgNq4Og5VM",
  authDomain: "form-gys.firebaseapp.com",
  projectId: "form-gys",
  storageBucket: "form-gys.appspot.com",
  messagingSenderId: "1065036212569",
  appId: "1:1065036212569:web:80844d8f1d02a09baf0448",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export const saveMember = async (idNumber, membName, lastName, celPhone, fechaNac, age, provincia, addres) =>{
    try {
        const docRef = await addDoc(collection(db, 'members'), {
            idNumber,
            membName,
            lastName,
            celPhone,
            fechaNac,
            age,
            provincia,
            addres,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};
