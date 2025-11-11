import type { RentalPropertyReturning } from "../../dto/propertyDto.js";
import { UpdateRentalError } from "../../error/rental/rental.error.js";
import type { IRentalPropertyRepository } from "../../repository/rental/IRentalPropertyRepository.js";
import type { IUpdateRentalService } from "./types/IUpdateRentalService.js";



export class UpdateRentalService implements IUpdateRentalService {
    constructor(private rentalDb:IRentalPropertyRepository){}
 updateRental = async (rental: RentalPropertyReturning) => {
    const res = await this.rentalDb.updateRental(rental);
    if (res) {
      return true;
    }

    throw new UpdateRentalError();
  };
}