
import { PriceError, PropertyNotFoundError } from "../../error/property/property.error.js";
import type { PropertyRepository } from "../../repository/property/propertyRepository.js";
import type { IFindProeprtiesByPriceService } from "./types/IFindPropertiesByPriceService.js";


export class FindPropertiesByPrice implements IFindProeprtiesByPriceService{
    constructor(private memoryDb: PropertyRepository){

    }
    findPropertiesByPrice=async  (minPropertyValue: number, maxPropertyValue: number) => {
        if(minPropertyValue >= maxPropertyValue){
            throw new PriceError()
        }
        const properties = await this.memoryDb.findPropertiesByPrice(minPropertyValue,maxPropertyValue)
        if(properties.length<=0 ){
            throw new PropertyNotFoundError
        }

        return properties
    }
}