import * as firebase from '../firebase'
import '../firebase/firestore'
import config from '../config'
export const firebaseApp = firebase.initializeApp(config)
export const firestore = firebase.firestore()

var charName;
var level;
var race;
var dndClass;

var firebaseConfig = {
  apiKey: "AIzaSyBO26wJCjlEFzK9GiP7HoIs428bSmr-U0A",
  authDomain: "character-cache-cc142.firebaseapp.com",
  databaseURL: "https://character-cache-cc142.firebaseio.com",
  projectId: "character-cache-cc142",
  storageBucket: "character-cache-cc142.appspot.com",
  messagingSenderId: "1031944349621",
  appId: "1:1031944349621:web:158ad89eda56b305599bfc",
  measurementId: "G-7LMFF4156H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyBO26wJCjlEFzK9GiP7HoIs428bSmr-U0A',
  authDomain: 'character-cache-cc142.firebaseapp.com',
  projectId: 'character-cache-cc142'
});

firebase.initializeApp(config);
function getDatabase() {
  var database = firebase.database();
}
