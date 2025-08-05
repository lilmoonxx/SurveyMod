"use client"

import { nanoid } from "nanoid";
import { useState } from "react";





const Question=({item, addAnswer}:{item:QuestionType, addAnswer:((item:QuestionType, index:number)=>void)})=>{
    const [itemSelected, setItemSelected]=useState<number | null>(null);
    function selectOption(index:number){
        setItemSelected(index)
        addAnswer(item, index)
    }
return(
<div className="p-4 py-12 border-b-2">
                        <h3 className="font-semibold uppercase tracking-wide text-xl mb-12">
                            {
                        item.topic
                    }
                        </h3>
                        <div className="gap-6 flex justify-center flex-wrap">
                        {
                            item.options.map((option, index)=>(
                                <div key={nanoid()} onClick={()=>selectOption(index)} className={`p-4 py-2 border-2 rounded-xl cursor-pointer ${itemSelected===index ? "brightness-150 border-indigo-500": "border-white brightness-125"}`}>
                                    {

                                        option
                                    }
                                </div>
                            ))
                        }
                        </div>
                    </div>
)
}

export default Question;