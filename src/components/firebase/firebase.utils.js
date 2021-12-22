import firebase, { initializeApp } from 'firebase/app';
import 'firebase/firestore';

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Required for side-effects
require('firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyByBspFyu9dNnAVTdTXf-g6Tgxn9MB_Cq8',
  authDomain: 'crwn-db-e2b2b.firebaseapp.com',
  projectId: 'crwn-db-e2b2b',
  storageBucket: 'crwn-db-e2b2b.appspot.com',
  messagingSenderId: '753202852887',
  appId: '1:753202852887:web:cf993d01fc99d7071f9852',
  measurementId: 'G-M0PMCZSXRD',
};
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
// export const db = getFirestore(firebaseApp);
var db = getFirestore(firebaseApp);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = doc(db, 'users', userAuth.uid);
  console.log('userAuth.id: ', userAuth.uid);
  const docSnap = await getDoc(userRef);
  console.log('docSnap: ', docSnap);
  console.log('userRef: ', userRef);
  if (!docSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
// always trigger google pop up whenever we use the google auth provider for authentication + sign-in

export const signInWithGoogle = () => signInWithPopup(auth, provider);
export default firebaseApp;
