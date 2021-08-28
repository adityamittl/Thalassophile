import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDkuBxw1rrtIeLiUIOWR70KSMWBkfS_LR8",
    authDomain: "thalassophile-7072a.firebaseapp.com",
    projectId: "thalassophile-7072a",
    storageBucket: "thalassophile-7072a.appspot.com",
    messagingSenderId: "811881348228",
    appId: "1:811881348228:web:968fc2f8790d343755d6d1",
    measurementId: "G-PJ8D182HKQ"
};

const fire = firebase.initializeApp(firebaseConfig)

export default fire;
