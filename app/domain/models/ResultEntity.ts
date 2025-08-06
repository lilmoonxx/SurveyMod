// app/domain/models/ResultEntity.ts

// Definimos AnswerType para incluir el título de la pregunta
export type AnswerType = {
    questionId: string;
    optionSelected: string;
    questionTitle: string; // Este atributo DEBE estar presente en tus datos de Firebase
};

// Definimos ObjAnsweredOptionType, utilizado en ResultsService
export type ObjAnsweredOptionType = {
    [key: string]: { chosen: number };
};

// Definimos ResultType, utilizado para la estructura de los datos del DTO
export type ResultType = {
    surveyId: string;
    answers: AnswerType[];
};

// Interfaz ResultI (sin cambios significativos, solo para referencia)
interface ResultI {
    addAnswer(newAnswer: AnswerType): void;
    getSurveyId(): string;
    getAnswers(): AnswerType[];
    validateAnswer(answer: string | number): boolean;
    getDTO(): ResultType;
}

export class Result implements ResultI {
    constructor(private surveyId: string, private answers: AnswerType[]) {}

    public addAnswer(newAnswer: AnswerType): void {
        this.answers = [...this.answers, newAnswer];
    }

    public getSurveyId(): string {
        return this.surveyId;
    }

    public getAnswers(): AnswerType[] {
        return this.answers;
    }

    public validateAnswer(answer: string | number): boolean {
        if (!answer) {
            return false;
        }
        // La lógica de validación actual está incompleta, pero no es el foco de esta solicitud.
        return false;
    }

    public getDTO(): ResultType {
        return { surveyId: this.surveyId, answers: this.answers };
    }
}
