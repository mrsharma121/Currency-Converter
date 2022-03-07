import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBbMqoZ9uZyLp_BdTBHusaxv10h5QmvTtM",
    authDomain: "currency-authentication.firebaseapp.com",
    projectId: "currency-authentication",
    storageBucket: "currency-authentication.appspot.com",
    messagingSenderId: "200960158803",
    appId: "1:200960158803:web:0ffe0ed275cac9e22baaa6"
  };
  // Initialize Firebase
  
const fire = firebase.initializeApp(firebaseConfig);

export default fire