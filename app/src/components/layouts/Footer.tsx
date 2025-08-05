 
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
    <footer className="w-[450px] h-32 bg-gray-400">
        <div  className=" text-white ">
    <p className="flex justify-center">
        FUN FACT 
            ""
       
    </p>
         
        </div>
    </footer>
    )
}

export default Footer