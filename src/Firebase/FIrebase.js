import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDwKiF0IsVa0DgzYaIdmn4plc7mLjUyHAk",
  authDomain: "online-food-ordering-8ffb1.firebaseapp.com",
  projectId: "online-food-ordering-8ffb1",
  storageBucket: "online-food-ordering-8ffb1.appspot.com",
  messagingSenderId: "706685733328",
  appId: "1:706685733328:web:df45c8a3a92b6c5e1891d5",
};

export const app = initializeApp(firebaseConfig);