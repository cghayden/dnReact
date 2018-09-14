// import * as firebase from "firebase/app";
import { firestore } from "../firebase";
import "firebase/firestore";

export const loadUserData = async (uid, usertype) => {
  try {
    const docRef = await firestore.collection(usertype).doc(uid);
    return await docRef
      .get() //returns a DocumentSnapshot
      .then(doc => hydrateDancerData(doc.data()));
  } catch (error) {
    console.error("ohh Nooo!", error);
    return error;
  }
};

export const hydrateDancerData = async user => {
  if (user.dancerRefs) {
    const dancers = user.dancerRefs;
    const dancerData = [];
    for (const docRef of dancers) {
      let dancer = await docRef.get().then(res => res.data());
      dancerData.push(dancer);
    }
    user.dancers = dancerData;
    console.log("new user", user);
  }
  return user;
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
