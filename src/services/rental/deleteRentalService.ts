import { DeleteRentalError } from "../../error/rental/rental.error.js";
import type { RentalPropertyRepository } from "../../repository/rental/rentalPropertyRepository.js";
import type { IDeleteRentalPropertyService } from "./types/IDeleteRentalPropertyService.js";


export class DeleteRentalService implements IDeleteRentalPropertyService {
    constructor(private rentalDb:RentalPropertyRepository){}
      deleteRental = async (id: string) => {
        const res = await this.rentalDb.delete(id);
        if (res) {
          return true;
        }
        throw new DeleteRentalError();
      };
     
}