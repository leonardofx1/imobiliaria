
import { PropertyNotFoundError } from "../../error/property/property.error.js";
import type { PropertyRepository } from "../../repository/property/propertyRepository.js";
import type { IFindAllPropertiesService } from "./types/IFindAllPropertiesService.js";


export class FindAllPropertiesService implements IFindAllPropertiesService {
    constructor (private memoryDb:PropertyRepository){

    }
    findAllProperties= async() => {

        const properties = await this.memoryDb.findAllProperties()
        if(!properties[0]){
            throw new PropertyNotFoundError()
        }
        return properties
    }
}