// Import the functions you need from the SDKs you need

import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const config = {
  apiKey: "AIzaSyBZaZNR0QS-5WqCHgRwxvWiIXs_yz9y2-A",

  authDomain: "turnout-624dc.firebaseapp.com",

  databaseURL:
    "https://turnout-624dc-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "turnout-624dc",

  storageBucket: "turnout-624dc.appspot.com",

  messagingSenderId: "322481793638",

  appId: "1:322481793638:web:d42cc10dc0ce0a9698dba7",

  measurementId: "G-S7C8RWE3PP"
};

// Initialize Firebase

export const firebaseApp = firebase.initializeApp(config);
export const eventsRef = firebaseApp
  .database()
  .ref()
  .child("events");
