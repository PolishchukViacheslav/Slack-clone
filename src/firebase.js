import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDj2zR9ds3vIp1Oay0G5cpE1IuWgq2aUkE",
  authDomain: "slack-clone-d34ac.firebaseapp.com",
  databaseURL: "https://slack-clone-d34ac.firebaseio.com",
  projectId: "slack-clone-d34ac",
  storageBucket: "slack-clone-d34ac.appspot.com",
  messagingSenderId: "183539705487",
  appId: "1:183539705487:web:b1e24cafba43c2f54b32fa",
  measurementId: "G-K1CT9JTWGB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

