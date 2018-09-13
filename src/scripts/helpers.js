// import * as firebase from "firebase/app";
import { firestore } from "../firebase";
import "firebase/firestore";

export const loadUserData = async (uid, usertype) => {
  try {
    const docRef = await firestore.collection(usertype).doc(uid);
    return await docRef
      .get() //returns a DocumentSnapshot
      .then(
        doc =>
          doc.exists ? hydrateDancerData(doc.data()) : "No such document!"
      );
    // .then(user => {
    //   user.dancers = hydrateDancerData(user);

    //   console.log("user", user);
    //   return user;
    // });
    // .then(user => user);
  } catch (error) {
    return error;
  }
};

export const hydrateDancerData = async user => {
  const dancers = user.dancers;
  const dancerData = [];
  for (const docRef of dancers) {
    let dancer = await docRef.get().then(res => res.data());
    dancerData.push(dancer);
  }
  user.dancers = dancerData;
  console.log("new user", user);
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
