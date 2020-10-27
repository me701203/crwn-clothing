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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);

   const snapShot = await userRef.get();

   if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
   }

return userRef;
}

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;