import { randomUUID } from "node:crypto";
import { PropertyDto } from "../../dto/propertyDto.js";
import type { IPropertyRepository } from "../../repository/property/IPropertyRepository.js";
import type { ICreatePropertyService } from "./types/ICreatePropertyService.js";
import { PropertyCreateError } from "../../error/property/property.error.js";


export class CreatePropertyService implements ICreatePropertyService {
    constructor (private memoryDb:IPropertyRepository ){

    }
    save= async (property: PropertyDto) => {
      
       
        const idProperty = await this.memoryDb.save(property)
        
        if(idProperty.length <=0) {
            throw new PropertyCreateError()
        }
        
    }
}