import type { RentalPropertyDto, RentalPropertyReturning } from "../../dto/propertyDto.js";




export interface IRentalPropertyRepository {
    save:(rental:RentalPropertyDto) => Promise<string>
    delete:(id:string)=>Promise<RentalPropertyReturning>
    getRental:(id:String) => Promise<RentalPropertyReturning|null>
    updateRental:(rental:RentalPropertyReturning)=> Promise<RentalPropertyReturning>
    }