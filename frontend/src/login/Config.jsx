import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAsTuOrP_Vleyv0Puh5FbgSDkUrbrfaIuo",
  authDomain: "login-test-5b9e0.firebaseapp.com",
  projectId: "login-test-5b9e0",
  storageBucket: "login-test-5b9e0.appspot.com",
  messagingSenderId: "969771350363",
  appId: "1:969771350363:web:67503b6dc949b146ae827e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export{auth,provider}