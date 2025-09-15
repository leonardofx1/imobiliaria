
import { PropertyNotFoundError } from "../../error/property/property.error.js";
import type { IPropertyRepository } from "../../repository/property/IPropertyRepository.js";
import type { IFindPropertyById } from "./types/IFindPropertyById.Service.js";


export class FindPropertyByIdService implements IFindPropertyById {
    constructor(private memoryDb : IPropertyRepository){}
    findPropertyById=async  (id: string) => {
        const property = await this.memoryDb.findByPropertyId(id)
        if(property.length > 0 ){

            return property
        }

        throw new PropertyNotFoundError()
    }
}