"use client"

import { useState } from "react"
import EmailInput from "../layouts/EmailInput"
import SurveyContainer, { surveyMock } from "../surveys/SurveyContainer"
import FormHeader from "./FormHeader"

function Survey() {
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [emailInput, setEmailInput] = useState<string>("");

  function emailSubmit(input: string) {
    if (input === "") {
      return;
    }

    const isEmail = input.includes("@") && input.includes(".");
    const isPhoneNumber = /^(\d{10}|\d{3}-\d{3}-\d{4})$/.test(input);
  
    if (isEmail || isPhoneNumber) {
      setIsEmailValid(true);
      setEmailInput(input);
    } else {
      alert("Please enter a valid email address or 10-digit phone number.");
    }
  }

  function resetEmailInput() {
    setIsEmailValid(false);
    setEmailInput("");
  }

  return (
    <main className={`${isEmailValid ? "max-w-[1200px]":"max-w-[600px]"} w-full h-screen mx-auto flex flex-col justify-center items-center`}>
      <div className="w-full flex flex-col items-center ">
        {!isEmailValid ? (
          <div className="aspect-square backdrop-blur-lg bg-white bg-opacity-10 w-full min-h-[450px] rounded-2xl p-4 shadow-2xl flex flex-col items-center justify-center">
            <FormHeader />
            <div className="h-[420px] pt-12 flex items-center flex-col justify-center">
              <EmailInput onSubmit={emailSubmit} />
            </div>
          </div>
        ) : null}
        
        {isEmailValid && (
          <div className="w-full h-[500px] overflow-y-auto">
            <SurveyContainer email={emailInput} surveyId={surveyMock.id} onSurveyComplete={resetEmailInput} />
          </div>
        )}
      </div>
    </main>
  )
}

export default Survey;
