// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCYYLkQnskHh7RdbZb0ruqjKSAqJxYjUD0',
  authDomain: 'gr8deals-a493e.firebaseapp.com',
  projectId: 'gr8deals-a493e',
  storageBucket: 'gr8deals-a493e.appspot.com',
  messagingSenderId: '307919814489',
  appId: '1:307919814489:web:f5115d68c8795c5de0d648',
};

initializeApp(firebaseConfig);
export const db = getFirestore();
