 
"use client"

import { useState } from "react";
import { sumar10, sumar100 } from "@/app/domain/utils";

 const Footer=()=>{
     const [switchCondition, setSwitchCondition]=useState<boolean>(false) ; 
   const toggleCondition=()=>{
    setSwitchCondition(!switchCondition)
    
    console.log(switchCondition)
   }
    return(
    <footer className="h-32 bg-gray-400">
        <button onClick={()=>sumar10(5)} className="border-4 p-4 bg-indigo-700 text-white hover:brightness-150">
            "sumar10 en consola"
        </button>
        <button onClick={()=>sumar100(69)} className="border-4 p-4 bg-indigo-700 text-white hover:brightness-150">
            "sumar100 en consola"
        </button>
        <button onClick={()=>toggleCondition()} className="border-2 border-violet-500 text-black">
            
            {
                
                switchCondition?
                    (<div>true</div>)
                :
                    (<div>false</div>)
                
            }
        </button>
    </footer>
    )
}

export default Footer