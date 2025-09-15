import type { PropertyDto } from "../../../dto/propertyDto.js";

export interface IFindPropertyById {
    findPropertyById: (id:string)=> Promise<PropertyDto[]|[]> 
}