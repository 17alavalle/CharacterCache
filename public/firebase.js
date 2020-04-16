  import * as firebase from '../firebase'
  import '../firebase/firestore'
  import config from '../config'
  export const firebaseApp = firebase.initializeApp(config)
  export const firestore = firebase.firestore()
  //src="https://requirejs.org/docs/release/2.3.5/minified/require.js";

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
  // Required for side-effects
  //require("firebase/auth");
  //require("firebase/firestore");

  // Initialize Cloud Firestore through Firebase
  firebase.initializeApp({
    apiKey: 'AIzaSyBO26wJCjlEFzK9GiP7HoIs428bSmr-U0A',
    authDomain: 'character-cache-cc142.firebaseapp.com',
    projectId: 'character-cache-cc142'
  });
  
  firebase.initializeApp(config);
  function getDatabase(){
    var database=firebase.database(); 
  }
        document.getElementById("DNDquiz").addEventListener("finishedCreating",submitDNDForm);
  document.getElementById("authorQuiz").addEventListener("finishedCreating",submitAuthorForm);

  function firebaseConstructor(){
    charName=null; 
    level=0;
    race=null; 
    dndClass=null; 
  }
  
  function firebaseConstructor(name,lev,rac,cClass){
    charName=this.name; 
    level=this.lev; 
    race=this.rac; 
    dndClass=this.cClass;  
  }
  
  function submitDNDForm(e){
    e.preventDefault(); 

    charName=getInputVal("characterName");
    level=getInputVal("level");
    race=getRace(); 
    dndClass=getClass(); 

    saveCharacter(charName, level, race, dndClass);
  }

  function saveCharacter(charName, level, race, dndClass){
    var newCharacter= database.push(); 
    newCharacter.set({
      characterName: charName,
      level: level,
      race: race,
      dndClass: dndClass
    }); 
  }

  function submitAuthorForm(e){

  }

  function getClass(){
    return document.getElementById("classResult").value; 
  }
  
  function getInputVal(id){
    return document.getElementById(id).value;
  }