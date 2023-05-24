import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
const firebaseConfig = {
  // apiKey: "AIzaSyDwKiF0IsVa0DgzYaIdmn4plc7mLjUyHAk",
  // authDomain: "online-food-ordering-8ffb1.firebaseapp.com",
  // projectId: "online-food-ordering-8ffb1",
  // storageBucket: "online-food-ordering-8ffb1.appspot.com",
  // messagingSenderId: "706685733328",
  // appId: "1:706685733328:web:df45c8a3a92b6c5e1891d5",
  apiKey: "AIzaSyB2YrFWU2tze2Bd3pZx3UAyBsvwcqhFst0",
  authDomain: "food-85eed.firebaseapp.com",
  projectId: "food-85eed",
  storageBucket: "food-85eed.appspot.com",
  messagingSenderId: "230561124659",
  appId: "1:230561124659:web:8d0277cc5de559ef0fee46",
};
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export const getData = async (id) => {
  const docRef = doc(firestore, "products", id);
  const result = await getDoc(docRef);
  return result;
};
export const getImage = (path) => {
  return getDownloadURL(ref(storage, path))
}
