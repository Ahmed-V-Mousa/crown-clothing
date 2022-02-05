import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBsdcK4jqhkEgkQdA044BeJq1sVVgd7WKk",
  authDomain: "crown-clothing-db-770b4.firebaseapp.com",
  projectId: "crown-clothing-db-770b4",
  storageBucket: "crown-clothing-db-770b4.appspot.com",
  messagingSenderId: "717353885957",
  appId: "1:717353885957:web:91dccf90828a1df7cf976c",
  measurementId: "G-060911ZQC3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;