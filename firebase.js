
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDyeFt8hA4BMRVGcubE1gNR8RMo2uHf_b4",
  authDomain: "sankat-se-samadhan.firebaseapp.com",
  projectId: "sankat-se-samadhan",
  storageBucket: "sankat-se-samadhan.appspot.com",
  messagingSenderId: "622759294749",
  appId: "1:622759294749:web:1e8a68f97b0be1c8de93f4",
  measurementId: "G-6SHGEKWM4B"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function firebaseAdd(name, email, message) {
  await addDoc(collection(db, "userQueries"), {
    name,
    email,
    message,
    createdAt: serverTimestamp()
  });
}
