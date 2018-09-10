// import * as firebase from "firebase/app";
import { firestore } from "../firebase";
import "firebase/firestore";

export const loadUserData = async (uid, usertype) => {
  try {
    const docRef = await firestore.collection(usertype).doc(uid);
    return await docRef
      .get() //returns a DocumentSnapshot
      .then(doc => (doc.exists ? doc.data() : "No such document!"));
  } catch (error) {
    return error;
  }
};

export const firestoreTests = async (uid, usertype) => {
  try {
    const docRef = await firestore.collection(usertype).doc(uid);
    console.log("docRef.id:", docRef.id);
    return await docRef
      .get()
      .then(DocSnapshot => console.log("DocSnapshot.id", DocSnapshot.id));
  } catch (error) {
    return error;
  }
};
