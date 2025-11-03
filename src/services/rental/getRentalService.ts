import type { RentalPropertyReturning } from "../../dto/propertyDto.js";
import { RentalNotFoundError } from "../../error/rental/rental.error.js";
import type { RentalPropertyRepository } from "../../repository/rental/rentalPropertyRepository.js";
import type { IGetRentalService } from "./types/IGetRentalService.js";


export class GetRentalService implements IGetRentalService {
    constructor(private rentalDb:RentalPropertyRepository){}
 getRental = async (rentalId: string) => {
    const resRental =await  this.rentalDb.getRental(rentalId)

    if(!resRental){
      throw new RentalNotFoundError()
    }
     return resRental
  }
}