interface QuestionI{
    getId():string;
    getCategory():string;
    getTopic():string;
    //tipo de opciones que va a tener la encuesta - (multipleOption) customize
    getType():string;
    getOptions():(string)[];
    setCategory(newCategory:string):void
    setTopic(newTopic:string):void
    setType(newType:string):void
    setAddOptions(newOption:string|number):void
    setRemoveOptions(optionRemove:string):void
    }

class Question {
    constructor(private id:string, private category:string, private topic:string="multipleChoice", 
        private type:string, private options:(string)[]){

    }
    public getId():string{
        return this.id;
    }

    public getCategory():string{
        return this.category
    }
    public getTopic():string{
        return this.topic
    }
    public getType():string{
        return this.type
    }
    public getOptions():(string)[]{
        return this.options
    }

    public setCategory(newCategory:string):void{
this.category= newCategory;
    }
    public setTopic(newTopic:string):void{
this.topic= newTopic;
    }
    public setType(newType:string):void{
this.type= newType;
    }

public setAddOptions(newOption:string|number):void{
    this.options = [...this.options, newOption.toString().toLowerCase()];
}

public setRemoveOptions(optionRemove:string):void{
if (this.options.includes(optionRemove.toLowerCase())){
    this.options= this.options.filter((option)=>option!==optionRemove.toLowerCase())
}
}
}