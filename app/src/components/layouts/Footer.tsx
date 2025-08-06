"use client"

import { Result } from "@/app/domain/models/ResultEntity";
import { ResultsService } from "@/app/domain/models/services/ResultsService";
import { getResultsData } from "@/app/firebase/fireStoreUtil";
import { useEffect, useState } from "react";
import FunFact from "./FunFact";

export type QuestionPercentageType={
    percentage:number,
    description:string,
    answerKey:string,
}

const Footer = () => {
    const [serviceStatistics, setServiceStatistics] = useState<ResultsService>();
    const [ questionStatisticsSelected,  setQuestionStatisticsSelected] = useState<QuestionPercentageType>();

    const fetchResults = async () => {
        const response: Result[] | undefined = await getResultsData();
        if (response) {
            setServiceStatistics(new ResultsService(response));
        }
    };

    useEffect(() => {
        fetchResults();
    }, []);

    function getStatisticsByQuestion(surveyId:string){
         if(!serviceStatistics){
        return; 
         }
          const questionIds=serviceStatistics?.getQuestionIds()

          const randomQuestionIndex=Math.round((Math.random()*(questionIds?.length === 1 ? 1 : questionIds?.length-1)))

         console.log(randomQuestionIndex)

           const stats = serviceStatistics.getQuestionPercentageStatistics(surveyId, questionIds[randomQuestionIndex]);
        // const questionTitle= serviceStatistics.getQuestionTitleById(questionIds[randomQuestionIndex])
            console.log(stats);

            const statsList=[]

            for(let key in stats){
                statsList.push({
    percentage:stats[key].percentage,
   // questionTitle:questionTitle,
    description:"",
    answerKey:key
            })
            }
            
             
                setQuestionStatisticsSelected(statsList[0]);
                console.log(statsList[0])
            
    }

    useEffect(() => {
       
        if (serviceStatistics) {
            const surveyId = "survey-12345";
           getStatisticsByQuestion(surveyId)
        }
    }, [serviceStatistics]); 

    return (
        <footer className="mt-6 backdrop-blur-lg bg-fuchsia-950 bg-opacity-20 rounded-2xl  w-[450px] h-32 bg-gray-400">
            <div className="mt-2 text-white flex flex-col justify-center items-center">
                <p className="flex justify-center text-lg font-bold mb-2">
                    FUN FACT

                </p>

                {
                questionStatisticsSelected && <FunFact questionStatistics={questionStatisticsSelected} 

                />
}
               
            </div>
        </footer>
    );
};

export default Footer;