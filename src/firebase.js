import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyB79naZj533Y7iNrTUgfEjPhxyhzeTVjm8",
  authDomain: "yoga-app-2d975.firebaseapp.com",
  projectId: "yoga-app-2d975",
  storageBucket: "yoga-app-2d975.appspot.com",
  messagingSenderId: "307914221956",
  appId: "1:307914221956:web:ebf7599b63ad279356d5d1"
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app);

export {auth,db}
