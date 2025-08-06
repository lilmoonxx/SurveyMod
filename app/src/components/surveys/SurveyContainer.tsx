import Footer from "../layouts/Footer"
import Header from "../layouts/Header"
import QuestionsList from "./QuestionsList"

export const surveyMock={
  "id": "survey-12345",
  "title": "Lifestyle and Habits Survey",
  "description": "This survey is designed to better understand people's daily habits and lifestyles, covering topics such as diet, exercise, sleep, and stress management.",
  "creationDate": 1722787800000,
  "theme": "health-wellness",
  "questions": [
    {
      "id": "q1",
      "category": "Lifestyle",
      "topic": "What is the first thing you drink upon waking up?",
      "type": "multiple-choice",
      "options": [
        "Coffee",
        "Water",
        "Tea",
        "Juice"
      ]
    },
    {
      "id": "q2",
      "category": "Lifestyle",
      "topic": "How many hours of sleep do you typically get each night?",
      "type": "multiple-choice",
      "options": [
        "Less than 5 hours",
        "5-6 hours",
        "7-8 hours",
        "More than 8 hours"
      ]
    },
    {
      "id": "q3",
      "category": "Lifestyle",
      "topic": "How often do you exercise in a week?",
      "type": "multiple-choice",
      "options": [
        "Never",
        "1-2 times",
        "3-4 times",
        "5 or more times"
      ]
    },
    {
      "id": "q4",
      "category": "Lifestyle",
      "topic": "What type of diet do you primarily follow?",
      "type": "multiple-choice",
      "options": [
        "Vegetarian",
        "Vegan",
        "Omnivore",
        "Other"
      ]
    },
    {
      "id": "q5",
      "category": "Lifestyle",
      "topic": "How many servings of fruits or vegetables do you consume daily?",
      "type": "multiple-choice",
      "options": [
        "None",
        "1-2 servings",
        "3-4 servings",
        "5 or more servings"
      ]
    },
    {
      "id": "q6",
      "category": "Lifestyle",
      "topic": "How do you usually commute to work or school?",
      "type": "multiple-choice",
      "options": [
        "Car",
        "Public transport",
        "Bicycle",
        "Walking"
      ]
    },
    {
      "id": "q7",
      "category": "Lifestyle",
      "topic": "How often do you consume fast food?",
      "type": "multiple-choice",
      "options": [
        "Daily",
        "A few times a week",
        "Once a week",
        "Rarely or never"
      ]
    },
    {
      "id": "q8",
      "category": "Lifestyle",
      "topic": "What is your primary source of stress?",
      "type": "multiple-choice",
      "options": [
        "Work",
        "Family",
        "Finances",
        "Health"
      ]
    },
    {
      "id": "q9",
      "category": "Lifestyle",
      "topic": "How do you typically unwind after a long day?",
      "type": "multiple-choice",
      "options": [
        "Watching TV",
        "Reading",
        "Exercising",
        "Spending time with friends/family"
      ]
    },
    {
      "id": "q10",
      "category": "Lifestyle",
      "topic": "How often do you engage in social activities?",
      "type": "multiple-choice",
      "options": [
        "Daily",
        "A few times a week",
        "Once a week",
        "Rarely or never"
      ]
    },
    {
      "id": "q11",
      "category": "Lifestyle",
      "topic": "How much water do you drink daily?",
      "type": "multiple-choice",
      "options": [
        "Less than 1 liter",
        "1-2 liters",
        "2-3 liters",
        "More than 3 liters"
      ]
    },
    {
      "id": "q12",
      "category": "Lifestyle",
      "topic": "How often do you take time for self-care activities?",
      "type": "multiple-choice",
      "options": [
        "Daily",
        "A few times a week",
        "Once a week",
        "Rarely or never"
      ]
    }
  ]
}

function SurveyContainer({ email, surveyId, onSurveyComplete }: { email: string; surveyId: string; onSurveyComplete: () => void; }) {
  return (
    <>
      <div className="text-white w-full flex flex-col gap-3 justify-between items-center">
        <Header />
        <QuestionsList 
          email={email} 
          surveyId={surveyId} 
          onSurveyComplete={onSurveyComplete} // Pasa la función aquí
        />
        <Footer />
      </div>
    </>
  )
}

export default SurveyContainer;