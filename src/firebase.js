import firebaseApp from 'firebase/app';
import firebase from 'firebase';
import 'firebase/storage';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCyPXsUbYcge8f1bFC7xb2p7bF9e94lKs0",
    authDomain: "deploydemo-138e0.firebaseapp.com",
    projectId: "deploydemo-138e0",
    storageBucket: "deploydemo-138e0.appspot.com",
    messagingSenderId: "135186391898",
    appId: "1:135186391898:web:8ccb8bc0955b6ba1f04963"
});

const db = app.firestore();
const storage = firebaseApp.storage();

export { storage, db };
export const auth = app.auth()
export default app;

