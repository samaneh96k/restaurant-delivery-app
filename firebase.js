// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIYTQtJzrOFWMzQBWnb0hnV55zsEMxx1w",
  authDomain: "mysicilyrestaurant.firebaseapp.com",
  databaseURL: "https://mysicilyrestaurant-default-rtdb.firebaseio.com",
  projectId: "mysicilyrestaurant",
  storageBucket: "mysicilyrestaurant.appspot.com",
  messagingSenderId: "114033517917",
  appId: "1:114033517917:web:77275b0b12b668f1b8b4b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;