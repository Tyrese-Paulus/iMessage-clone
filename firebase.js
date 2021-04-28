import firebase from "firebase";

const firebaseConfig = {
  apiKey: 'AIzaSyCD7FLmGlCVPpqKz4Z1slm8YZ_wEgMTaCA',
  authDomain: 'imessage-clone-b805f.firebaseapp.com',
  projectId: 'imessage-clone-b805f',
  storageBucket: 'imessage-clone-b805f.appspot.com',
  messagingSenderId: '405979451696',
  appId: '1:405979451696:web:d16e8cb1b8aa0f0965b8f5',
  measurementId: 'G-W65NTW95HR',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
