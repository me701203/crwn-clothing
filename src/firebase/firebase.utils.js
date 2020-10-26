import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAyMw3QbP6O5zeZ8pZfkZhsD5zyO52O-Qc",
    authDomain: "crwn-db-5a6d5.firebaseapp.com",
    databaseURL: "https://crwn-db-5a6d5.firebaseio.com",
    projectId: "crwn-db-5a6d5",
    storageBucket: "crwn-db-5a6d5.appspot.com",
    messagingSenderId: "470432729056",
    appId: "1:470432729056:web:9e7af0393280cefd5e8d85",
    measurementId: "G-5PRCCPCYZ5"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;