export class Product{
    public productId:number
    public productName:string
    public price:number

    constructor(pid:number,pn:string,p:number){
        this.productId = pid
        this.productName = pn
        this.price = p
    }

    public displayProduct():string{
        return "Product ID: " +this.productId+ "| Product Name: " +this.productName+ "| Price: " +this.price
    }
}