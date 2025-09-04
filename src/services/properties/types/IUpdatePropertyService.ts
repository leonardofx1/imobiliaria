import type { PropertyDto } from "../../../dto/propertyDto.js";



export interface IUpdatePropertyService {
    update:( property:PropertyDto)=> void
}