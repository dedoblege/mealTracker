import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDLZCqoYjrScx7VPNemFXCzB_xSCfqm_4w",
  authDomain: "mealtracker-2dd90.firebaseapp.com",
  projectId: "mealtracker-2dd90",
  storageBucket: "mealtracker-2dd90.appspot.com",
  messagingSenderId: "572612856572",
  appId: "1:572612856572:web:54db38522d003541092579",
  measurementId: "G-RY4VD67V4N",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
//TODO should I add next line??
// firebase.analytics()

export const db = firebaseApp.firestore()
