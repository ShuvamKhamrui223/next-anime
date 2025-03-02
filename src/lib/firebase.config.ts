// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-Frdb-4agykW4dWrygZ2oTW_drIzAL10",
    authDomain: "anime-website-18bdf.firebaseapp.com",
    projectId: "anime-website-18bdf",
    storageBucket: "anime-website-18bdf.firebasestorage.app",
    messagingSenderId: "438021458474",
    appId: "1:438021458474:web:3784f4605e0a6a866cd153"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const FIREBASE_DATABASE = getFirestore(app)