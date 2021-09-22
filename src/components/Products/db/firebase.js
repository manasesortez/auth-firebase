//if
import * as firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/auth";
import 'firebase/firestore';
import fb from "firebase/app";

// Your web app's Firebase configuration
// eslint-disable-next-line
var firebaseConfig;

try {
  firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAa-dMkU3GmVp89-XwlRkm1rY9kDwjhPwI",
    authDomain: "mvc-food.firebaseapp.com",
    databaseURL: "https://mvc-food-default-rtdb.firebaseio.com/",
    projectId: "mvc-food",
    storageBucket: "mvc-food.appspot.com",
    messagingSenderId: "841079159502",
    appId: "1:841079159502:web:044d764bbd5d3b4cd7ae9f",
  })
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error raised', err.stack)
  }}

// Initialize Firebase
export const db = fb.firestore();
