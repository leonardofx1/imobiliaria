import type { PropertyDto } from "../../../dto/propertyDto.js";




export interface IFindAllPropertiesGarage {
    findAllPropertiesGarage: (minQuantityOfGarage:number,maxQantityOfGarage:number)=>  Promise<PropertyDto[]|[]>
}