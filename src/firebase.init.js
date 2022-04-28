// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUeSafB1RE8oPekAKc3vnD88R2-9dG5LM",
    authDomain: "warehouse-management-8028c.firebaseapp.com",
    projectId: "warehouse-management-8028c",
    storageBucket: "warehouse-management-8028c.appspot.com",
    messagingSenderId: "827220373888",
    appId: "1:827220373888:web:6f5f0264801ee2a9b21165"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;