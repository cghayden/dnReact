import * as firebase from "firebase/app";
import "firebase/firestore";

// const databaseConfig = {
//   apiKey: "AIzaSyCzK72Ph0ZZikXj1b32AJGhXU-gunCckhM",
//   authDomain: "dancer-notes.firebaseapp.com",
//   databaseURL: "https://dancer-notes.firebaseio.com",
//   projectId: "dancer-notes",
//   storageBucket: "dancer-notes.appspot.com",
//   messagingSenderId: "332438519195"
// };

// const firebaseApp = firebase.initializeApp(databaseConfig);

//initialize Firestore
const firestoreConfig = {
  apiKey: "AIzaSyBEZhAE6I6TphPQ7OxD9HLxxO80olJ0D-g",
  authDomain: "dn-firestore.firebaseapp.com",
  databaseURL: "https://dn-firestore.firebaseio.com",
  projectId: "dn-firestore",
  storageBucket: "dn-firestore.appspot.com",
  messagingSenderId: "321983348443"
};

firebase.initializeApp(firestoreConfig);

const firestore = firebase.firestore();

// Disable deprecated features
firestore.settings({
  timestampsInSnapshots: true
});

//named export
export { firestore };
