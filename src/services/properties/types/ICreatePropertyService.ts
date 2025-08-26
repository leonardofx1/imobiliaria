import type { PropertyDto } from "../../../dto/propertyDto.js";

export interface ICreatePropertyService {
    save:(property:PropertyDto) => void
     
}