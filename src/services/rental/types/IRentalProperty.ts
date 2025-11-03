import type { PropertyDto, RentalPropertyDto, RentalPropertyReturning } from "../../../dto/propertyDto.js"



export interface ICreateRentalProperty {
    getPropertyById: (id:string) => Promise<PropertyDto| null>,
    create:(rentalDto:RentalPropertyDto)=> Promise<Boolean | null>
    validateRental:(rentalDto:RentalPropertyDto)=> Promise<Boolean|null>
}