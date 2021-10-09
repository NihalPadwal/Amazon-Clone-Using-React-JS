// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'



const firebaseConfig = {
  apiKey: "AIzaSyD6Ym6uslMk03zMIGdDstiLLy9gdJoeqK8",
  authDomain: "clone-f5433.firebaseapp.com",
  projectId: "clone-f5433",
  storageBucket: "clone-f5433.appspot.com",
  messagingSenderId: "148925523189",
  appId: "1:148925523189:web:9ea07d69f240feadec11bc",
  measurementId: "G-HJXHHX3S7P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };

