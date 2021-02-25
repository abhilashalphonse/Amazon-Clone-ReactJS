import firebase from 'firebase';

 const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyB841a71hwgGqvfR-IHN7aK6P0QzNBxRg0",
    authDomain: "clone-e3da2.firebaseapp.com",
    projectId: "clone-e3da2",
    storageBucket: "clone-e3da2.appspot.com",
    messagingSenderId: "283482566258",
    appId: "1:283482566258:web:8e0a7d4347793fcf9a1ceb",
    measurementId: "G-J58GR8QB0Y"
 
 });


const auth = firebase.auth();

export { auth };