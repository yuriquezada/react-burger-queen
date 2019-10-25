// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";
// import {firebaseConfig} from './config/firestore-config.js';
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtgymKSWV62YN8zimGsMlfDc0mruTi2qM",
  authDomain: "burguer-queen-234c8.firebaseapp.com",
  databaseURL: "https://burguer-queen-234c8.firebaseio.com",
  projectId: "burguer-queen-234c8",
  storageBucket: "burguer-queen-234c8.appspot.com",
  messagingSenderId: "41829269712",
  appId: "1:41829269712:web:c3ddee7e215289bcd31ed5"
};

//probando cuenta

firebase.initializeApp(firebaseConfig);
