import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyByte5nh7cajduAOegw-DmqRupfHQWnyfk",
    authDomain: "test-frbs-6650b.firebaseapp.com",
    databaseURL: "https://test-frbs-6650b.firebaseio.com",
    projectId: "test-frbs-6650b",
    storageBucket: "test-frbs-6650b.appspot.com",
    messagingSenderId: "668938698072",
    appId: "1:668938698072:web:2aefef4677ed827592f92d"
};

firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;