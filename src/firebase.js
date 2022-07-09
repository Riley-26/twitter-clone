import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAFrZaN-CrTRZO8dUwyKtQQkuXT7SqjNRI",
  authDomain: "twitter-clone-5c4e8.firebaseapp.com",
  projectId: "twitter-clone-5c4e8",
  storageBucket: "twitter-clone-5c4e8.appspot.com",
  messagingSenderId: "957313669942",
  appId: "1:957313669942:web:89f1e78889ee8fb1c23197"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db