import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDSfZlOxLOR3Qu46MQ75KjOcnEhMQlHQxM",
  authDomain: "crwn-db-9b87c.firebaseapp.com",
  databaseURL: "https://crwn-db-9b87c.firebaseio.com",
  projectId: "crwn-db-9b87c",
  storageBucket: "",
  messagingSenderId: "350533658069",
  appId: "1:350533658069:web:51bdbce5e14776e396495c",
  measurementId: "G-DGYFG23KD9"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
