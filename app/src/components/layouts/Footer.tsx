// app/components/Footer.tsx
"use client"

import { Result } from "@/app/domain/models/ResultEntity";
import { ResultsService } from "@/app/domain/models/services/ResultsService";
import { getResultsData } from "@/app/firebase/fireStoreUtil";
import { useEffect, useState } from "react";
import FunFact from "./FunFact";

// Definimos el tipo para las preguntas de tu MockData (no usado directamente aquí, pero útil para referencia)
type MockQuestion = {
    id: string;
    category: string;
    topic: string; // Este es el título de la pregunta
    type: string;
    options: string[];
}

// Aquí creamos el array de objetos con los títulos de las preguntas y sus descripciones
// Puedes expandir o modificar estas descripciones según tus necesidades.
const questionDescriptions: { questionTitle: string; description: string }[] = [
    {
        questionTitle: "What is the first thing you drink upon waking up?",
        description: "de las personas que responden esta encuesta prefieren tomar"
    },
    {
        questionTitle: "How many hours of sleep do you typically get each night?",
        description: "de las personas que responden esta encuesta duermen"
    },
    {
        questionTitle: "How often do you exercise in a week?",
        description: "de las personas que responden esta encuesta hacen ejercicio"
    },
    {
        questionTitle: "What type of diet do you primarily follow?",
        description: "de las personas que responden esta encuesta siguen una dieta"
    },
    {
        questionTitle: "How many servings of fruits or vegetables do you consume daily?",
        description: "de las personas que responden esta encuesta consumen"
    },
    {
        questionTitle: "How do you usually commute to work or school?",
        description: "de las personas que responden esta encuesta se transportan"
    },
    {
        questionTitle: "How often do you consume fast food?",
        description: "de las personas que responden esta encuesta consumen comida rápida"
    },
    {
        questionTitle: "What is your primary source of stress?",
        description: "de las personas que responden esta encuesta tienen como fuente principal de estrés"
    },
    {
        questionTitle: "How do you typically unwind after a long day?",
        description: "de las personas que responden esta encuesta se relajan"
    },
    {
        questionTitle: "How often do you engage in social activities?",
        description: "de las personas que responden esta encuesta participan en actividades sociales"
    },
    {
        questionTitle: "How much water do you drink daily?",
        description: "de las personas que responden esta encuesta beben"
    },
    {
        questionTitle: "How often do you take time for self-care activities?",
        description: "de las personas que responden esta encuesta dedican tiempo al autocuidado"
    }
];

export type QuestionPercentageType = {
    percentage: number;
    description: string;
    answerKey: string;
    questionTitle: string;
}

const Footer = () => {
    const [serviceStatistics, setServiceStatistics] = useState<ResultsService>();
    const [questionStatisticsSelected, setQuestionStatisticsSelected] = useState<QuestionPercentageType | undefined>(undefined);

    const fetchResults = async () => {
        const response: Result[] | undefined = await getResultsData();
        if (response) {
            setServiceStatistics(new ResultsService(response));
        }
    };

    useEffect(() => {
        fetchResults();
    }, []);

    function getStatisticsByQuestion(surveyId: string) {
        if (!serviceStatistics) {
            console.log("Service statistics not available.");
            return;
        }

        const questionIds = serviceStatistics?.getQuestionIds();

        if (!questionIds || questionIds.length === 0) {
            console.log("No question IDs found.");
            return;
        }

        const randomQuestionIndex = Math.floor(Math.random() * questionIds.length);
        const selectedQuestionId = questionIds[randomQuestionIndex];

        console.log("Selected Question ID:", selectedQuestionId);

        const stats = serviceStatistics.getQuestionPercentageStatistics(surveyId, selectedQuestionId);
        const questionTitle = serviceStatistics.getQuestionTitleById(selectedQuestionId);

        // --- INICIO: Líneas para depuración ---
        console.log("DEBUG: Título de pregunta obtenido:", questionTitle);
        console.log("DEBUG: Array de descripciones:", questionDescriptions);
        // --- FIN: Líneas para depuración ---

        console.log("Statistics for selected question:", stats);

        const statsList: QuestionPercentageType[] = [];

        // Encuentra la descripción correspondiente al título de la pregunta
        const foundDescription = questionDescriptions.find(
            (item) => item.questionTitle === questionTitle
        )?.description || "";

        // --- INICIO: Líneas para depuración ---
        console.log("DEBUG: Descripción encontrada:", foundDescription);
        // --- FIN: Líneas para depuración ---

        for (let key in stats) {
            statsList.push({
                percentage: stats[key].percentage,
                questionTitle: questionTitle,
                description: foundDescription, // Asigna la descripción encontrada
                answerKey: key
            });
        }

        if (statsList.length > 0) {
            setQuestionStatisticsSelected(statsList[0]);
            console.log("Selected Fun Fact Data:", statsList[0]);
        } else {
            setQuestionStatisticsSelected(undefined);
            console.log("No statistics available for the selected question.");
        }
    }

    useEffect(() => {
        if (serviceStatistics) {
            const surveyId = "survey-12345";
            getStatisticsByQuestion(surveyId);
        }
    }, [serviceStatistics]);

    return (
        <footer className="mt-6 backdrop-blur-lg bg-fuchsia-950 bg-opacity-20 rounded-2xl w-[450px] h-32 bg-gray-400">
            <div className="mt-2 text-white flex flex-col justify-center items-center">
                <p className="flex justify-center text-lg font-bold mb-2">
                    FUN FACT
                </p>

                {
                    questionStatisticsSelected && <FunFact questionStatistics={questionStatisticsSelected} />
                }
            </div>
        </footer>
    );
};

export default Footer;
