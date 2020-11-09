import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDU9UmJn0fxrlMuspoi1va6N54grrZp6Gs",
  authDomain: "wetalk-8ff72.firebaseapp.com",
  databaseURL: "https://wetalk-8ff72.firebaseio.com",
  projectId: "wetalk-8ff72",
  storageBucket: "wetalk-8ff72.appspot.com",
  messagingSenderId: "843976643467",
  appId: "1:843976643467:web:1e2276bec60645c365958e",
  measurementId: "G-7B4834FCS2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db =firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;