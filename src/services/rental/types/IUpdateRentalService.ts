import type { RentalPropertyReturning } from "../../../dto/propertyDto.js";


export interface IUpdateRentalService {
    updateRental: (rental:RentalPropertyReturning) => Promise<Boolean|null>
}