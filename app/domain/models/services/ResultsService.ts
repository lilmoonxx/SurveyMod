import { Result } from "../ResultEntity";



type PercentageStatisticsType = {

 chosen: number;

 percentage: number;

};



type ObjPercentageStatisticsType = {

 [key: string]: PercentageStatisticsType;

};



export class ResultsService {

 constructor(private results: Result[]) {}



 /**

   * getResultsBySurveyId

   * @param surveyId El ID de la encuesta que quieres buscar.

   * @returns Un array de objetos Result que corresponden a la encuesta solicitada.

   */

 public getResultsBySurveyId(surveyId: string): Result[] {

 return this.results.filter((result) => result.getSurveyId() === surveyId);

 }



/**

   * getTotalAnswers

   * @param surveyId El ID de la encuesta para la cual quieres el recuento total de respuestas.

   * @returns El número total de respuestas para esa encuesta.

   */

 public getTotalAnswers(surveyId: string): number {

 const surveyResults = this.getResultsBySurveyId(surveyId);

 if (surveyResults.length === 0) {

 return 0;

 }

 // Suma la cantidad de respuestas de cada objeto Result

 return surveyResults.reduce((total, result) => total + result.getAnswers().length, 0);

 }



 /**

   * getAnswersByQuestionId

   * @param surveyId El ID de la encuesta.

   * @param questionId El ID de la pregunta.

   * @returns Un array de objetos AnswerType para la pregunta específica.

   */

 public getAnswersByQuestionId(surveyId: string, questionId: string): AnswerType[] {

 const surveyResults = this.getResultsBySurveyId(surveyId);

 if (surveyResults.length === 0) {

 return [];

 }



 const allAnswers: AnswerType[] = surveyResults.flatMap((result) => result.getAnswers());

 return allAnswers.filter((answer) => answer.questionId === questionId);

 }



 /**

   * calculateStatistics

   * @param optionsAnswered Un array de objetos AnswerType.

   * @returns Un objeto donde las claves son las opciones de respuesta y los valores son el recuento de veces que se eligieron.

   */

 public calculateStatistics(optionsAnswered: AnswerType[]): ObjAnsweredOptionType {

 const answersChosen: ObjAnsweredOptionType = {};

 const listOptionsFiltered = optionsAnswered.map((answer) => answer.optionSelected);



 for (const option of listOptionsFiltered) {

 if (answersChosen.hasOwnProperty(option)) {

 answersChosen[option].chosen += 1;

 } else {

 answersChosen[option] = { chosen: 1 };

 }

 }

 return answersChosen;

 }


 /**

   * getQuestionStatistics

   * @param surveyId El ID de la encuesta.

   * @param questionId El ID de la pregunta para la cual quieres las estadísticas.

   * @returns Las estadísticas de la pregunta, en formato ObjAnsweredOptionType.

   */

 public getQuestionStatistics(surveyId: string, questionId: string): ObjAnsweredOptionType {

 const answersForQuestion = this.getAnswersByQuestionId(surveyId, questionId);

 return this.calculateStatistics(answersForQuestion);

 }



 /**

   * getQuestionPercentageStatistics

   * @param surveyId El ID de la encuesta.

   * @param questionId El ID de la pregunta para la cual quieres el porcentaje.

   * @returns Un objeto con el recuento y el porcentaje de cada opción.

   */

 public getQuestionPercentageStatistics(

 surveyId: string,

 questionId: string

 ): ObjPercentageStatisticsType {

 const answersForQuestion = this.getAnswersByQuestionId(surveyId, questionId);

 const totalAnswersForQuestion = answersForQuestion.length;





 if (totalAnswersForQuestion === 0) {

 return {};

 }



 const statistics = this.calculateStatistics(answersForQuestion);

 const percentageStatistics: ObjPercentageStatisticsType = {};



 for (const option in statistics) {

 if (Object.prototype.hasOwnProperty.call(statistics, option)) {

 const chosenCount = statistics[option].chosen;

 const percentage = (chosenCount / totalAnswersForQuestion) * 100;

 percentageStatistics[option] = {

 chosen: chosenCount,

 percentage: parseFloat(percentage.toFixed(2)), // Redondeamos a 2 decimales para mayor claridad.

 };

 }

 }



 return percentageStatistics;

 }



 public getQuestionIds(){

 return this.results[0].getDTO().answers.map((answer)=>answer.questionId)

 }

}