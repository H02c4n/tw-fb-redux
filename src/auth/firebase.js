import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBB289yswiwbKaF3SbK9frVAYXx6AKhLNw",
  authDomain: "teamwork-clrswy.firebaseapp.com",
  projectId: "teamwork-clrswy",
  storageBucket: "teamwork-clrswy.appspot.com",
  messagingSenderId: "163075432771",
  appId: "1:163075432771:web:1a6798419de1f7d85a0ff6",
  measurementId: "G-9QEKZK79D6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addQuestionToFirebase = async (data) => {
  await addDoc(collection(db, "questions"), data);
};
