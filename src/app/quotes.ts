export class Quotes {
    showDescription: boolean;
    constructor(public name:string,
        public quote:string, 
        public description:string, 
        public date:Date)
        {
        this.showDescription = false;
    }
    
}
