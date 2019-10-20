import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { useState, useEffect } from 'react';

import './App.css';
import Case from './components/case';


// const firebase = require("firebase");
// Required for side-effects
// require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
// firebase.initializeApp({
//     apiKey: 'AIzaSyByte5nh7cajduAOegw-DmqRupfHQWnyfk',
//     authDomain: 'test-frbs-6650b.firebaseapp.com',
//     projectId: 'test-frbs-6650b'
// });

// var db = firebase.firestore();

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

// //get data
// let dataVariable = []
// db.collection("users").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//     dataVariable.push(doc.data())
//       console.log(dataVariable[0]);
//   });
// });


function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    // let result
    // async function netCall() {
    //   result = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //   console.log(result)
    // }
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))

    // setPosts(result)
  }, [])
  console.log(posts)
  // const postItems = posts.map(post => {
  //   console.log(post)
  // })

  return (
    <div className="App">
      <Case/>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     cases: state.cases
//   }
// }

export default App;
