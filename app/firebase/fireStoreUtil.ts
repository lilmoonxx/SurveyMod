// firestoreUtil.ts
import { Result } from "../domain/models/ResultEntity";
import { db } from "./firebase.config";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const saveResultToFirestore = async (result: ResultType) => {
  try {
    const docRef = await addDoc(collection(db, "RESULTS"), result);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
export const getResultsData = async () => {
  try {
    const docRef = await getDocs(collection(db, "RESULTS"));
    const results:any[] = []
    docRef.forEach((doc)=>results.push(new Result(doc.data().surveyId, doc.data().answers)))
    return results;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};