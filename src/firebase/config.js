import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwzhJ4QoQ1JCd21Rmlc2nGdx9otxKGXDY",
  authDomain: "hng-image.firebaseapp.com",
  projectId: "hng-image",
  storageBucket: "hng-image.appspot.com",
  messagingSenderId: "122146168234",
  appId: "1:122146168234:web:4fa39045fca2f27783dfd3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);

export default firebaseAuth;
