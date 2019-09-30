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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
