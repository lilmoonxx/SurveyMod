interface AnswerI{
    getId(): string;
    getSurveyId(): string;
    getQuestionId(): string;
    getOptionSelected(): string;
    getEmail(): string;
    getDate(): number;
}

class Answer {
            constructor(private id:string, private surveyId:string,private questionId:string,
                private optionSelected:string, private email:string,private date:number
            ){
            }
          public getId(): string {
        return this.id;
    }

    public getSurveyId(): string {
        return this.surveyId;
    }

    public getQuestionId(): string {
        return this.questionId;
    }

    public getOptionSelected(): string{
        return this.optionSelected;
    }

    public getEmail(): string {
        return this.email;
    }

    public getDate(): number {
        return this.date;
    }

    // Setters
 

 

    public setOptionSelected(newOption: string ): void {
        this.optionSelected = newOption;
    }
            
        
            
}




