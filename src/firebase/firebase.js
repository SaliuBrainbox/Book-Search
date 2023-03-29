import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged, getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase         configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv8rIdYexJspe6hZHBXzWIblofa-TmMCc",
  authDomain: "books-9fdd3.firebaseapp.com",
  projectId: "books-9fdd3",
  storageBucket: "books-9fdd3.appspot.com",
  messagingSenderId: "689010746177",
  appId: "1:689010746177:web:c30001fb8029c77bfef7c0",
  measurementId: "G-N8C8E0HQJX"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth(app)

export const googleLogin = () => signInWithPopup(auth, provider);

export const logup = async(email, password) => {
  if (!email || !password)  return;
   return await createUserWithEmailAndPassword(auth, email, password)
}

export const login = async(email, password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword( auth, email, password )
}

export const logut = async() => {
  await signOut(auth);
  alert('GO OUT')
}

export const change = (callback) => {
  onAuthStateChanged(auth, callback)
}

export const db = getFirestore()

export const userDatabase = async( userAuth, moreInfo={displayName : 'Abu'} ) => {
  const userDocRef = doc( db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()) {
    const { email, displayName } = userAuth;
    const createdAt = new Date()

    try{
      await setDoc( userDocRef, {email, createdAt, displayName, ...moreInfo } )
    } catch(error) {
      console.log(error)
    }
  }

  return userDocRef
}
