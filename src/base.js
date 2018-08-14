import Rebase from "re-base";
import firebase from "firebase";

var config = {
  apiKey: "AIzaSyCzK72Ph0ZZikXj1b32AJGhXU-gunCckhM",
  authDomain: "dancer-notes.firebaseapp.com",
  databaseURL: "https://dancer-notes.firebaseio.com",
  projectId: "dancer-notes",
  storageBucket: "dancer-notes.appspot.com",
  messagingSenderId: "332438519195"
};

const firebaseApp = firebase.initializeApp(config);

//create an instance of re-base (bindings)
const base = Rebase.createClass(firebaseApp.database());
// firebaseApp.database() returns the actual database we have

//named export
export { firebaseApp };

// default export
export default base;
