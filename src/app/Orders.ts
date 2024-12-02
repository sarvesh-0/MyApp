export class Order{
    public orderId:number
    public orderDate:Date
    public orderStatus:string
    public deliveryCountry:string
    public orderFrom:string

    constructor(oid:number,od:Date,os:string,dc:string,of:string){
        this.orderId = oid
        this.orderDate = od
        this.orderStatus = os
        this.deliveryCountry = dc
        this.orderFrom = of
    }
}