import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDjeU8GWJmwfAT5fB_3bn5QUFvXk1-HMHE",
    authDomain: "crwn-db-484df.firebaseapp.com",
    projectId: "crwn-db-484df",
    storageBucket: "crwn-db-484df.appspot.com",
    messagingSenderId: "1053126576290",
    appId: "1:1053126576290:web:aac8997f17b5634198affb",
    measurementId: "G-HFNCY8WB1D"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

