import firebase from 'firebase';
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBLAwXCDJQ_9IUbpzctTltAVSCYtLQsmKQ",
  authDomain: "barter-app-8291e.firebaseapp.com",
  databaseURL: "https://barter-app-8291e.firebaseio.com",
  projectId: "barter-app-8291e",
  storageBucket: "barter-app-8291e.appspot.com",
  messagingSenderId: "333383746208",
  appId: "1:333383746208:web:e049504f022e96dd88bfc5",
  measurementId: "G-V8R3JBJVS6"
};
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
