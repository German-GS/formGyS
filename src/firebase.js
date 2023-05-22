// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfxjxVOe6YGzzNjKx6ieYEPHN_EtwlMdw",
  authDomain: "ppa-guiasyscout.firebaseapp.com",
  databaseURL: "https://ppa-guiasyscout-default-rtdb.firebaseio.com",
  projectId: "ppa-guiasyscout",
  storageBucket: "ppa-guiasyscout.appspot.com",
  messagingSenderId: "729192149638",
  appId: "1:729192149638:web:733fe7f6948a26d7351707"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Obtener instancia de auth
export const auth= getAuth(app)

//Obtener conexion a base de datos
export const db = getFirestore(app)

export const savePpa = (ppaData) => {
  return addDoc(collection(db, 'PPA'), ppaData);
};

