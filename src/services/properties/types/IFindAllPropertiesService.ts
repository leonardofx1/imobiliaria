import type { PropertyDto } from "../../../dto/propertyDto.js";


export interface IFindAllPropertiesService{
    findAllProperties: () => Promise<PropertyDto[]|[]>
}