import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBZJaqtx9zdEunUrOXfhxlar7e5fUtsEOw",
    authDomain: "information-management-s-c7f1c.firebaseapp.com",
    databaseURL: "https://information-management-s-c7f1c.firebaseio.com",
    projectId: "information-management-s-c7f1c",
    storageBucket: "information-management-s-c7f1c.appspot.com",
    messagingSenderId: "268610080805",
    appId: "1:268610080805:web:8fda29c355049c4bfeafcc",
    measurementId: "G-S94PHPME8M"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;