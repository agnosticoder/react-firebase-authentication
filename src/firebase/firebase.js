import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
    // apiKey: "AIzaSyBz5gQni_JvmCcp9ZPKOGewwvgF7w9Oohg",
    // authDomain: "react-authentication-dev-50e0e.firebaseapp.com",
    // databaseURL: "https://react-authentication-dev-50e0e.firebaseio.com",
    // projectId: "react-authentication-dev-50e0e",
    // storageBucket: "react-authentication-dev-50e0e.appspot.com",
    // messagingSenderId: "849066035510",
    // appId: "1:849066035510:web:46ada2c10b2957d1190b97"
}

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;


