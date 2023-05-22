import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";
<<<<<<< HEAD
import { getStorage } from "firebase/storage";
=======
import { getDownloadURL, getStorage, ref } from "firebase/storage";

>>>>>>> 5cbb14146a40829af92dad2d92a1eb69ac0d9454
const firebaseConfig = {
  apiKey: "AIzaSyDwKiF0IsVa0DgzYaIdmn4plc7mLjUyHAk",
  authDomain: "online-food-ordering-8ffb1.firebaseapp.com",
  projectId: "online-food-ordering-8ffb1",
  storageBucket: "online-food-ordering-8ffb1.appspot.com",
  messagingSenderId: "706685733328",
  appId: "1:706685733328:web:df45c8a3a92b6c5e1891d5",
  // apiKey: "AIzaSyB2YrFWU2tze2Bd3pZx3UAyBsvwcqhFst0",
  // authDomain: "food-85eed.firebaseapp.com",
  // projectId: "food-85eed",
  // storageBucket: "food-85eed.appspot.com",
  // messagingSenderId: "230561124659",
  // appId: "1:230561124659:web:8d0277cc5de559ef0fee46",
};
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

export const getData = async (id) => {
  const docRef = doc(firestore, "products", id);
  const result = await getDoc(docRef);
  return result;
<<<<<<< HEAD
};
=======
};

export const getImage = (path) => {
  return getDownloadURL(ref(storage, path))
}
>>>>>>> 5cbb14146a40829af92dad2d92a1eb69ac0d9454
