import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBK1wxb4-4dqdWb3QwAPKGoG2kiV-kBT_4",
  authDomain: "the-chat-app-1cb81.firebaseapp.com",
  projectId: "the-chat-app-1cb81",
  storageBucket: "the-chat-app-1cb81.appspot.com",
  messagingSenderId: "328784398836",
  appId: "1:328784398836:web:0a32bc713c50af9027d1a1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()