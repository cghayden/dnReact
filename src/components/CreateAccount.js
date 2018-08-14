import React from "react";
import firebase from "firebase";
import base, { firebaseApp } from "../base";
import CreateUser from "./CreateUser";
import CreateStudio from "./CreateStudio";
import CreateRetail from "./CreateRetail";

class CreateAccount extends React.Component {
  render() {
    return (
      <div>
        <CreateUser />
        <CreateStudio />
        <CreateRetail />
      </div>
    );
  }
}

export default CreateAccount;

// state = { name: "", email: "", password: "" };

// createAccount = async event => {
//   event.preventDefault();
//   const email = this.state.email;
//   const password = this.state.password;
//   const name = this.state.name;
//   const userType = "d";
//   //1. register user  -> firebase
//   await firebaseApp
//     .auth()
//     .createUserWithEmailAndPassword(email, password)
//     .catch(error => {
//       // Handle Errors here.
//       console.error(error);
//     });
//   // 2. if success, post new user to firebase
//   const user = await firebase.auth().currentUser;
//   const dnid = `${userType}${Date.now()}`;
//   await base.post(`users/${user.uid}/name`, {
//     data: name
//   });
//   await base.post(`users/${user.uid}/dnid`, {
//     data: dnid
//   });
// };

// handleInputChange = event => {
//   const target = event.target;
//   const value = target.value;
//   const name = target.name;

//   this.setState({
//     [name]: value
//   });
// };
