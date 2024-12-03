export class Workshop{
    public srNo:number
    public courseName:string
    public tech:string
    public fees:number
    public duration:number
    public feesStatus:string

    constructor(sno:number,cn:string,t:string,f:number,d:number,fs:string){
        this.srNo=sno
        this.courseName=cn
        this.tech=t
        this.fees=f
        this.duration=d
        this.feesStatus=fs
    }
}