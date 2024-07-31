import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  getFirestore,
  writeBatch,
  collection,
  getDocs,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmBuJywxrO7bOUAzrZcyLZC_Ro_4iLPAk",
  authDomain: "binance-wotd.firebaseapp.com",
  projectId: "binance-wotd",
  storageBucket: "binance-wotd.appspot.com",
  messagingSenderId: "496576992661",
  appId: "1:496576992661:web:b6cfe60e4d527342bc529c",
  measurementId: "G-34W0MDZPMH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);

// Initialize Functions
export const firebase = {
  loadData: async (cName, callback = () => {}) => {
    try {
      const querySnapshot = await getDocs(collection(db, cName));
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      !data?.length && callback("info", "No data present from Firebase! Changed to local data");
      return data;
    } catch (error) {
      console.log(error);
      callback("error", "Failed to fetch data from Firebase!");
    }
    return [];
  },
  saveData: async (data, cName, prop = "id", callback = () => {}) => {
    if (!data) return;

    const ref = doc(db, cName, data[prop]);
    await setDoc(ref, data);

    callback("Data saved to Firebase");
  },
  batchAdd: async (list, cName, prop = "id", callback = () => {}) => {
    const batch = writeBatch(db);
    list.forEach((item) => {
      const ref = doc(db, cName, item[prop]);
      batch.set(ref, item, { merge: true }); // Use merge: true to update the document if it exists
    });
    try {
      await batch.commit();
      callback("success", "Data is uploaded successfully!");
    } catch (error) {
      console.log(`Error performing batch write: ${error}`);
      callback("error", "Data is failed to upload!");
    }
  },
};
