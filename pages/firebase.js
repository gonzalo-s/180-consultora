// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDV1t8RWotQc-EUqKRm5U8CFzTIxPcfyeM",
    authDomain: "consultora-5ab48.firebaseapp.com",
    projectId: "consultora-5ab48",
    storageBucket: "consultora-5ab48.appspot.com",
    messagingSenderId: "864294037502",
    appId: "1:864294037502:web:228c1effe2391a5e9d02af",
    measurementId: "G-5L39V9E46Z"
};


// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
  
  