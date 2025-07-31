type SurveyType = {
  title:string,
  description:string,
  creationDate:number,
  theme:string,
  questions:QuestionType[]
};

type QuestionType = {
      
      id:string,
      category:string,
      topic:string,
      type:string,
      options:(string)[]
    
}

type AnswerType = {
    id:string, 
    surveyId:string,
    questionId:string,
    optionSelected:string, 
    email:string,
    date:number
}

type ResultType = {
    surveyId:string;
    answers:AnswerType[];
}
type OptionChosenType= {
    chosen:number;
}
type ObjAnsweredOptionType= {
  [key: string]:OptionChosenType
}
