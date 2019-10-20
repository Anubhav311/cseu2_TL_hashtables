import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';


const firebase = require("firebase");
// Required for side-effects
// require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyByte5nh7cajduAOegw-DmqRupfHQWnyfk',
    authDomain: 'test-frbs-6650b.firebaseapp.com',
    projectId: 'test-frbs-6650b'
});

var db = firebase.firestore();

// db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });

// Add a second document with a generated ID.
// db.collection("users").add({
//   first: "Alan",
//   middle: "Mathison",
//   last: "Turing",
//   born: 1912
// })
// .then(function(docRef) {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//   console.error("Error adding document: ", error);
// });



function App() {

  const [test, setTest] = useState(['test'])

  //get data
  let dataVariable = []
  db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      dataVariable.push(doc.data())
        console.log(dataVariable[0]);
    });
  });

  useEffect(() => {
    setTest(dataVariable)
  })

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello World</p>
        <p>{console.log(dataVariable[0])}</p>
      </header>
    </div>
  );
}

export default App;
