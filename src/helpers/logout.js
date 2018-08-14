import firebase from "firebase";

export function logout() {
  firebase.auth().signOut();
  localStorage.setItem("dnid", null);
}
