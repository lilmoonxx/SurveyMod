import { nanoid } from 'nanoid';

interface AnswerI{
    getId(): string;
    getSurveyId(): string;
    getQuestionId(): string;
    getOptionSelected(): string;
    getEmail_Number(): string;
    getDate(): number;
}

class Answer {
            constructor(private id:string, private surveyId:string,private questionId:string,
                private optionSelected:string, private email_number:string,private date:number
            ){
                this.id=nanoid()
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

    public getEmail_Number(): string {
        return this.email_number;
    }

    public getDate(): number {
        return this.date;
    }

    // Setters
 

 

    public setOptionSelected(newOption: string ): void {
        this.optionSelected = newOption;
    }
            
        
            
}




