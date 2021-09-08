import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByBspFyu9dNnAVTdTXf-g6Tgxn9MB_Cq8",
  authDomain: "crwn-db-e2b2b.firebaseapp.com",
  projectId: "crwn-db-e2b2b",
  storageBucket: "crwn-db-e2b2b.appspot.com",
  messagingSenderId: "753202852887",
  appId: "1:753202852887:web:cf993d01fc99d7071f9852",
  measurementId: "G-M0PMCZSXRD",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
// always trigger google pop up whenever we use the google auth provider for authentication + sign-in

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebaseApp;
