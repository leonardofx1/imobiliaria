import type { RentalPropertyReturning } from "../../../dto/propertyDto.js";



export interface IGetRentalService {
    getRental:(id:string) => Promise<RentalPropertyReturning>
}