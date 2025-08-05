import { ChartNetwork } from "lucide-react"
import Image from "next/image"


function FormHeader() {
  return (
    <h1 className="border-b flex justify-start gap-3 items-center py-4 text-5xl font-sans font-black">
    <span>Survey App</span><ChartNetwork className=" " size={60}/>
    </h1>
  )
}

export default FormHeader