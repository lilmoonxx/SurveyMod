import { QuestionPercentageType } from "./Footer"

 
 function FunFact({questionStatistics}:{questionStatistics:QuestionPercentageType}) {
   return (
     <div> 
        {questionStatistics !== null ? (
                  /*  <p className="text-sm mt-3 ">
                        {questionStatistics.percentage}% of people {questionStatistics.answerKey}!
                    </p> */
                    <p className="text-sm mt-3 ">
                      COMING SOON!
                    </p>
                ) : (
                    <p className="text-sm">
                       ""
                    </p>
                )}
                </div>

   )
 }
 
 export default FunFact
 
