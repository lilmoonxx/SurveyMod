interface ResultI {

addAnswer(newAnswer:AnswerType):void;

getSurveyId():string;

getAnswers():AnswerType[];

calculateStatistics(optionsAnswered:AnswerType[]):ObjAnsweredOptionType;

validateAnswer(answer:string|number):boolean

}



export class Result {

 constructor(private surveyId:string, private answers:AnswerType[]){


 }



public addAnswer(newAnswer:AnswerType):void{

this.answers=[...this.answers, newAnswer]

}



public getSurveyId():string{

return this.surveyId



}



public getAnswers():AnswerType[]{

 return this.answers

}







public validateAnswer(answer:string|number):boolean{





if(!answer){

return false;



}





return false;

}



public getDTO():ResultType{

 return {surveyId:this.surveyId, answers:this.answers}

}



}

