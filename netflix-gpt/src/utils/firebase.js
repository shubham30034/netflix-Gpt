// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOnDdyrcCJ9TYz1HliVqNC6LvKQPpGZmQ",
  authDomain: "netflix-963bb.firebaseapp.com",
  projectId: "netflix-963bb",
  storageBucket: "netflix-963bb.appspot.com",
  messagingSenderId: "231688707697",
  appId: "1:231688707697:web:05aa9d93aa83067e2145d0",
  measurementId: "G-LGN9MVC2XV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();