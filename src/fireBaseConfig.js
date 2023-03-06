// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQPCrtmqY9nReMMckwQ6NQEfNDrYrKLzU",
    authDomain: "granf1.firebaseapp.com",
    projectId: "granf1",
    storageBucket: "granf1.appspot.com",
    messagingSenderId: "928053767108",
    appId: "1:928053767108:web:839aa05d26e9f7afa25291",
    measurementId: "G-G38TPS4L60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
export default storage;