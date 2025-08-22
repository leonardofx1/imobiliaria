import type { PropertyStatus } from "../db/schema.js"

export class PropertyDto {
    constructor(public id:string,public city:string, public number: number,public street:string, public title:string,public description:string, public type:PropertyStatus, public vacanciesGarage:number, public buildingFloor:string, public price : string, public ownerId:string,public area:string, public bedrooms:number,public bathrooms:number){
        this.id = id ?? ''
        this.city =city
        this.street=street ??''
        this.number=number
        this.area=area
        this.bathrooms=bathrooms
        this.bedrooms=bedrooms
        this.buildingFloor=buildingFloor
        this.description=description
        this.ownerId =ownerId
        this.price=price
        this.type=type
        this.vacanciesGarage=vacanciesGarage
        this.title=title
    }
}

export class Expenses {
    constructor(public id:string,public imovelId:string,public condoFee:number, public propertyTax:number,public maintenaceCosts:number){
        this.id=id
        this.imovelId = imovelId
        this.condoFee = condoFee
        this.maintenaceCosts=maintenaceCosts
        this.propertyTax=propertyTax
    }
}