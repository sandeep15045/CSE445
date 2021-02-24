import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDSzCubPB1U8QVhpgCz5w5wBYKYTWqtspo",
    authDomain: "donation-5131a.firebaseapp.com",
    projectId: "donation-5131a",
    storageBucket: "donation-5131a.appspot.com",
    messagingSenderId: "451930734750",
    appId: "1:451930734750:web:0810742d5cacdf30afbb8f",
    measurementId: "G-YBZCS09KP3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };