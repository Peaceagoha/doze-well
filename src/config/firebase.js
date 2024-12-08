import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9M1mCtEHx1FdwZ_joUb31XmvvLvkWpmM",
  authDomain: "dozewell-7096e.firebaseapp.com",
  projectId: "dozewell-7096e",
  storageBucket: "dozewell-7096e.firebasestorage.app",
  messagingSenderId: "176281489360",
  appId: "1:176281489360:web:d576e09b71930512fbb3d5",
  measurementId: "G-X1SMMYG3E8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
