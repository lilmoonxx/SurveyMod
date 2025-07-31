interface ResultI {
addAnswer(newAnswer:Answer):void;
getSurveyId():string;
getAnswers():Answer[];
calculateStatistics(optionsAnswered:AnswerType[]):ObjAnsweredOptionType;
validateAnswer(answer:string|number):boolean
}

class Result {
    //private answer:Answer[]
    constructor(private surveyId:string, private answers:Answer[]){
  
        
    }

public addAnswer(newAnswer:Answer):void{
this.answers=[...this.answers, newAnswer]
}

public getSurveyId():string{
   return this.surveyId
    
}

public getAnswers():Answer[]{
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



}



    
    

