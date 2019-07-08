export class Quotes {
    showDescription: boolean;
    constructor(public name:string,
        public quote:string, 
        public author:string, 
        public newDate:Date)
        {
        this.showDescription = false;
    }
    
}
