import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBLOl_237RZL4jWE51J_QTXEJNL4Q0D2cA",
  authDomain: "pepe-witch.firebaseapp.com",
  databaseURL: "https://pepe-witch.firebaseio.com",
  projectId: "pepe-witch",
  storageBucket: "pepe-witch.appspot.com",
  messagingSenderId: "94500623423",
  appId: "1:94500623423:web:c0719325741d00653d948a"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
