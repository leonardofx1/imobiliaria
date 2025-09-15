
import type { PropertyDto } from "../../../dto/propertyDto.js";


export interface IFindPropertyOwnerId {
    findPropertyOwnerId:(id:string)=> Promise<PropertyDto[]|[]>
}