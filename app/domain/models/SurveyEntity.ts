interface SurveyI {
   getId(): string;
    getTitle(): string;
    getDescription(): string;
    getCreationDate(): number;
    getQuestions(): Question[];
    getTheme(): string;
    addQuestion(question: Question): void;
    removeQuestion(id: string): void;
    
    
    setTitle(newTitle: string): void;
    setCategory(newCategory: string): void;
    setDescription(newDescription: string): void;
    setTheme(newTheme: string): void;
}

class Survey {
    constructor(
        private id: string,
        private title: string,
        private category: string,
        private description: string,
        private creationDate: number,
        private questions: Question[],
        private theme: string
    ) {}

    public getId(): string {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getDescription(): string {
        return this.description;
    }

    public getCreationDate(): number {
        return this.creationDate;
    }

    public getQuestions(): Question[] {
        return this.questions;
    }

    public getTheme(): string {
        return this.theme;
    }

    public addQuestion(newQuestion: Question): void {
        this.questions=[...this.questions, newQuestion];
    }

    public removeQuestion(id: string): void {
        this.questions = this.questions.filter(question => question.getId() !== id);
    }



    // Setters
    public setTitle(newTitle: string): void {
        this.title = newTitle;
    }

    public setCategory(newCategory: string): void {
        this.category = newCategory;
    }

    public setDescription(newDescription: string): void {
        this.description = newDescription;
    }

    public setTheme(newTheme: string): void {
        this.theme = newTheme;
    }
}
