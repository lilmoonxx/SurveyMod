interface ResultI {
addAnswer(newAnswer:AnswerType):void;
getSurveyId():string;
getAnswers():AnswerType[];
calculateStatistics(optionsAnswered:AnswerType[]):ObjAnsweredOptionType;
validateAnswer(answer:string|number):boolean
}

class Result {
    //private answer:Answer[]
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


    public calculateStatistics(optionsAnswered:AnswerType[]):ObjAnsweredOptionType {
  const listaAnswer = [...optionsAnswered];
const answersChosen:ObjAnsweredOptionType={}
  const listOptionsFiltered = listaAnswer.map(answer => answer.optionSelected);



  for(let option of listOptionsFiltered)
  {
   
   
if (answersChosen.hasOwnProperty(option)){
answersChosen[option].chosen+=1

  }else {
   answersChosen[option]={chosen:1}
  }
 
  
}
 return answersChosen;
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



    
    

