// import * as firebase from "firebase/app";
import { firestore } from "../firebase";
import "firebase/firestore";
import { resolve } from "path";
import { rejects } from "assert";

export const loadUserData = async (uid, usertype) => {
  try {
    const userRef = await firestore.collection(usertype).doc(uid);
    return userRef
      .get() //returns a DocumentSnapshot
      .then(userDoc => userDoc.data())
      .then(userData => {
        console.log("dry userData:", userData);
        hydrateDancers(userData);
        // console.log("hydratedDancers", hydratedDancers);
      });
    // .then(userData => console.log("docdata:", userData));
  } catch (error) {
    return error;
  }
};

const hydrateDancers = userData => {
  let newDancers = [];
  for (const docRef of userData.dancers) {
    docRef.get().then(doc => newDancers.push(doc.data()));
  }
  // console.log("newDancers", newDancers);
  userData.dancers = newDancers;
  console.log("new userDataDancers", userData);
};

// const hydrateDancers = userData => {
//   return new Promise((resolve, reject) => {
//     const newDancers = [];
//     for (const docRef of userData.dancers) {
//       docRef.get().then(doc => newDancers.push(doc.data()));
//     }
//     console.log("newDancers", newDancers[0]);

//     // console.log("newDancers", newDancers);
//     resolve(newDancers);
//   });
// };

// const map = userData.dancers.map(dancerRef => {
//   dancerRef.get().then(doc => doc.data());
// });

// const hydrateDancers = userData => {
//   // console.log("hydrate:", userData.dancers);
//   let dancersData = [];
//   for (const dancer of userData.dancers) {
//     dancer.get().then(d => {
//       // console.log(d.data());
//       dancersData.push(d.data());
//     });
//   }
//   // userData.dancers = dancersData;
//   console.log("dancersData", dancersData);
//   return dancersData;
//   // console.log("hydrated userData:", userData);
// };

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

export const catchErrors = fn => {
  return function(...args) {
    return fn(...args).catch(err => {
      console.error("OH NO!", err);
    });
  };
};
