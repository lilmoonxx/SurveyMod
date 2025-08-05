"use client"

import { useState } from "react"


const EmailInput=({onSubmit}:{onSubmit:(input:string)=>void})=>{
const[inputState, setInputState]=useState<string>("")
return(
<div className=" -mt-6">
    <label className="flex flex-col items-center gap-6 ">
    <span className="font-semibold font-sans">    
   LOG IN WITH YOUR EMAIL/PHONE NUMBER
   </span>
    <input value={inputState} onChange={(e)=>setInputState(e.target.value)} className="text-gray-700"
    
    type="email"
    placeholder=""
    />
     </label>
     <div className="w-full flex justify-center">
     <button aria-placeholder="domain@example.com" onClick={()=>onSubmit(inputState)} className="mx-auto p-8 py-4 mt-10 border-2 shadow-xl rounded-xl">
        SIGN IN 
     </button>
     </div>
</div>
)
} 

export default EmailInput