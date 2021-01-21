import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCEKqM2azcPnu2fg7CuJsFFt_r39jQYzEI",
  authDomain: "fb-app-2020.firebaseapp.com",
  projectId: "fb-app-2020",
  storageBucket: "fb-app-2020.appspot.com",
  messagingSenderId: "179653234867",
  appId: "1:179653234867:web:d199d507b2d0e30ba020c6",
  measurementId: "G-NB87Z3TRVL"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export default db;
  export {auth, provider};