const firebase = require("firebase/app");
// Required for side-effects
require("firebase/firestore");

export default firebase.initializeApp({
  apiKey: "",
  authDomain: "work-it-9a497.firebaseapp.com",
  projectId: "work-it-9a497",
  storageBucket: "work-it-9a497.appspot.com",
  messagingSenderId: "546566398700",
  appId: "1:546566398700:web:827d2ebf1aae5ca6acbbc9"
})