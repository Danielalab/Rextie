import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAjzOikZC5JMV_mcFI_Bak7ZtdBmzJyxf4",
  authDomain: "rextie-419e0.firebaseapp.com",
  databaseURL: "https://rextie-419e0.firebaseio.com",
  projectId: "rextie-419e0",
  storageBucket: "",
  messagingSenderId: "765911967876"
};

export const firebaseApp = firebase.initializeApp(config);