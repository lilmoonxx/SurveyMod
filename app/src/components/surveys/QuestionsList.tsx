"use client"


import { saveResultToFirestore } from "@/app/firebase/fireStoreUtil";
import { useState } from "react"

import Question from "./Question";
import { nanoid } from "nanoid";
import { surveyMock } from "./SurveyContainer";
import ErrorModal from "../layouts/ErrorModal";
import EmailInput from "../layouts/EmailInput";

type OptionSelectedResponseType={
    questionId:string,
    optionSelected:string,

}



function QuestionsList({ email, surveyId, onSurveyComplete }: { email: string, surveyId: string, onSurveyComplete: () => void }) {
    const [answers, setAnswers] = useState<AnswerType[]>([]);
    const [hasError, setHasError] = useState<string | null>(null);
    const [openedModal, setOpenedModal] = useState<boolean>(false);

   

function validateSubmit(answers:AnswerType[]){
const questionIds= surveyMock.questions.map((q)=>q.id)
const answerIds= answers.map((a)=>a.questionId)
const isValid= questionIds.every((id)=>answerIds.includes(id))
if(!isValid){
setHasError("Please make sure to answer all the questions")
console.log(hasError)
setOpenedModal(true)
}
return isValid;
}



   function addAnswer(item:QuestionType, index:number){
       if(answers.find((responseItem:AnswerType)=>responseItem.questionId === item.id)){
        console.log("Inside if - update answer")
        
        

        setAnswers(answers.map((answer)=>answer.id === item.id ? { questionId:answer.questionId,
        date:answer.date,
        optionSelected:item.options[index],
        id:answer.id, 
        email_number:answer.email_number,
        surveyId:answer.surveyId,
  
    } : answer))
    } else {
        console.log("Inside else - new answer")

        setAnswers([...answers, { questionId:item.id,
        date:new Date().getTime(),
        optionSelected:item.options[index],
        id:item.id, 
        email_number:email,
        surveyId:surveyId,
  
    }])
    }
    }

 
    function submitAnswers() {
        const surveyResult = {
            surveyId: surveyId,
            answers: answers,
            email_number: email,
            date: new Date().getTime(),
        };
        
        if (validateSubmit(answers)) {
            saveResultToFirestore(surveyResult);
            onSurveyComplete(); // Call the function to reset the email input
        }
    }

  return (

    <div className=" w-full h-full  text-center">
       
            {
                surveyMock.questions.map((questionItem, index)=>(
                    <Question  key={index} item={questionItem} addAnswer={addAnswer}
                     />
                ))
            }
            <div className="flex justify-center">
      <div className=" flex justify-center mt-8 w-10 px-12 py-4 border-2 cursor-pointer rounded-xl" onClick={()=>submitAnswers()}>
        SEND
      </div>
      </div>
      {
        (hasError && openedModal) && <ErrorModal  onClose={()=>setOpenedModal(false) } message={hasError} />
      }
    </div>
  )
}

export default QuestionsList