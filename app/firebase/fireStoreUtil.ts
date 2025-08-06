// firestoreUtil.ts
import { Result, AnswerType, ResultType } from "../domain/models/ResultEntity"; // Importamos AnswerType y ResultType
import { db } from "./firebase.config";
import { collection, addDoc, getDocs } from "firebase/firestore";

/**
 * saveResultToFirestore
 * Guarda un objeto ResultType en la colección "RESULTS" de Firestore.
 * Es crucial que el objeto 'result' que se pasa a esta función ya contenga
 * el 'questionTitle' dentro de cada objeto 'AnswerType' en su array 'answers'.
 * @param result El objeto ResultType a guardar.
 */
export const saveResultToFirestore = async (result: ResultType) => {
    try {
        const docRef = await addDoc(collection(db, "RESULTS"), result);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

/**
 * getResultsData
 * Recupera los documentos de la colección "RESULTS" de Firestore
 * y los mapea a una lista de objetos Result.
 * Asegura que el 'questionTitle' se extraiga correctamente de cada respuesta.
 * @returns Un array de objetos Result o undefined si ocurre un error.
 */
export const getResultsData = async (): Promise<Result[] | undefined> => {
    try {
        const querySnapshot = await getDocs(collection(db, "RESULTS"));
        const results: Result[] = [];

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const surveyId = data.surveyId as string;
            const rawAnswers = data.answers as any[]; // Los datos crudos de las respuestas

            // Mapeamos las respuestas crudas a nuestro tipo AnswerType
            // Aseguramos que 'questionTitle' se incluya al construir el objeto AnswerType
            const answers: AnswerType[] = rawAnswers.map(rawAnswer => ({
                questionId: rawAnswer.questionId,
                optionSelected: rawAnswer.optionSelected,
                questionTitle: rawAnswer.questionTitle // Asegúrate de que este campo exista en tus documentos de Firebase
            }));

            results.push(new Result(surveyId, answers));
        });

        return results;
    } catch (e) {
        console.error("Error fetching results data: ", e);
        return undefined; // Retorna undefined en caso de error
    }
};
