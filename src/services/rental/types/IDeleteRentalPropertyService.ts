import type { PropertyStatus } from "../../../db/schema.js"
import type { PropertyDto } from "../../../dto/propertyDto.js"


export interface IDeleteRentalPropertyService {
    deleteRental:(id:string)=> Promise<Boolean| null>
    changeStatus:(property:PropertyDto &{id:string},status:PropertyStatus) => void
    getPropertyById:(id:string) => Promise<PropertyDto &{id:string}> 
}