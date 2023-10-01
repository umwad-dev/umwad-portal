import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAZWkIQVIT1RqZA6JQwWDv272HAKITOYXQ",
  authDomain: "umwad-portal.firebaseapp.com",
  projectId: "umwad-portal",
  storageBucket: "umwad-portal.appspot.com",
  messagingSenderId: "652814756986",
  appId: "1:652814756986:web:230497e9c3ed4246df1fc3",
  measurementId: "G-LNPZQ6QRHF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export default app;

// For production
// apiKey: "AIzaSyAZWkIQVIT1RqZA6JQwWDv272HAKITOYXQ",
// authDomain: "umwad-portal.firebaseapp.com",
// projectId: "umwad-portal",
// storageBucket: "umwad-portal.appspot.com",
// messagingSenderId: "652814756986",
// appId: "1:652814756986:web:230497e9c3ed4246df1fc3",
// measurementId: "G-LNPZQ6QRHF",

// For testing
// apiKey: "AIzaSyDj_JaFFz9bQ5f_PR2ys1kELDMZ94VSiMQ",
//   authDomain: "startup-me-visayas.firebaseapp.com",
//   projectId: "startup-me-visayas",
//   storageBucket: "startup-me-visayas.appspot.com",
//   messagingSenderId: "248834034140",
//   appId: "1:248834034140:web:ca4a9a776160ec2d90e719",
//   measurementId: "G-CM7JYHHTBV",
