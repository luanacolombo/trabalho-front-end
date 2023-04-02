// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCx3mN2iDHieNJk7XA6lh40BzkWO5ynhmQ",
    authDomain: "trabalho-front-end.firebaseapp.com",
    projectId: "trabalho-front-end",
    storageBucket: "trabalho-front-end.appspot.com",
    messagingSenderId: "347906700739",
    appId: "1:347906700739:web:687944fd00e3df7aa17976",
    measurementId: "G-69C9N4D1W9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;