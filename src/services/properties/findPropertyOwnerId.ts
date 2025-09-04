
import { PropertyNotFoundError } from "../../error/property/property.error.js";
import type { IPropertyRepository } from "../../repository/property/IPropertyRepository.js";

import type { IFindPropertyOwnerId } from "./types/IFindPropertyOwnerId.js";


export class FindPropertyOwnerIdService implements IFindPropertyOwnerId {
    constructor(private memoryDb:IPropertyRepository){

    }
    findPropertyOwnerId=async (id:string) => {
        const properties = await this.memoryDb.findAllPropertiesOwnerId(id)
        console.log('chamou mesmo',properties)
        if(!properties[0]){
            throw new PropertyNotFoundError()
        }
        return properties
    }
    
}