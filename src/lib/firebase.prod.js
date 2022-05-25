import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
//import { seedDatabase } from "../seed"; 


const firebaseConfig = {
  apiKey: "AIzaSyBUw01fp1X0V-n3ZIKnwQxxiTyB9AjZ748",
  authDomain: "netflix-c0213.firebaseapp.com",
  projectId: "netflix-c0213",
  storageBucket: "netflix-c0213.appspot.com",
  messagingSenderId: "410784417681",
  appId: "1:410784417681:web:396d7a779288732f3bfc30"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

// Seed firestore database (run only once, then comment it out)
//seedDatabase(projectFirestore)

export { projectFirestore, projectAuth, timestamp }  