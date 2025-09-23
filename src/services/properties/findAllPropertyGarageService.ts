
import { PropertyNotFoundError, QuantityOfGarageError } from "../../error/property/property.error.js";
import type { IPropertyRepository } from "../../repository/property/IPropertyRepository.js";
import type { IFindAllPropertiesGarage } from "./types/IFindAllPropertiesGarageService.js";


export class FindAllPropertiesGarageService implements IFindAllPropertiesGarage {
    constructor(private memoryDb:IPropertyRepository){}
    findAllPropertiesGarage=async (minQuantityOfGarage: number=0,maxQuantityOfGarage:number=100) => {

        if(minQuantityOfGarage >= maxQuantityOfGarage){
            throw new QuantityOfGarageError()
        }
        const properties =await  this.memoryDb.findAllPropertiesGarage(minQuantityOfGarage,maxQuantityOfGarage)
      
        if(properties.length <= 0 ){
            throw new PropertyNotFoundError()
        }
        return properties
    }
}