// firestoreUtil.ts
import { db } from "./firebase.config";
import { collection, addDoc } from "firebase/firestore";

export const saveResultToFirestore = async (result: ResultType) => {
  try {
    const docRef = await addDoc(collection(db, "RESULTS"), result);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};