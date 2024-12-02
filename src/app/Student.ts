export class Student{
    studName:string
    rollNo:number
    marks:number

    constructor(name:string,rollno:number,marks:number){
        this.studName = name
        this.rollNo = rollno
        this.marks = marks
    }

    display():string{
        return "Name = "+this.studName +   "  |  Roll No = " + this.rollNo +   "  |  Marks = " +this.marks
    }
}