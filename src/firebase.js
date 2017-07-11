import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyBq6R6ohRAUUWf50rkGlV8qXTUdj4458WE",
    authDomain: "platzimusic-34e0d.firebaseapp.com",
    databaseURL: "https://platzimusic-34e0d.firebaseio.com",
    projectId: "platzimusic-34e0d",
    storageBucket: "platzimusic-34e0d.appspot.com",
    messagingSenderId: "338872760661"
  };

firebase.initializeApp(config);

export const firebaseAuth = firebase.auth();
export const firebaseDatabase = firebase.database();

export default firebase