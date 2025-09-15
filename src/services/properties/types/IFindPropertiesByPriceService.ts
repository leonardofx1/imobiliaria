import type { PropertyDto } from "../../../dto/propertyDto.js";


export interface IFindProeprtiesByPriceService {
    findPropertiesByPrice :(minPropertyValue:number,maxPropertyValue:number)=> Promise<PropertyDto[]|[]>

    
}