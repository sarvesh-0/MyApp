export class Student1{
    RegNo:number
    FullName:string
    BirthDate:Date
    Gender:string
    Degree:string
    Percentage:number

    constructor(rn:number,fn:string,bd:Date,g:string,d:string,p:number){
        this.RegNo=rn
        this.FullName=fn
        this.BirthDate=bd
        this.Gender=g
        this.Degree=d
        this.Percentage=p
    }
}