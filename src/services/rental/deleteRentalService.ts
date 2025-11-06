import type { PropertyStatus } from "../../db/schema.js";
import { PropertyDto } from "../../dto/propertyDto.js";
import { PropertyNotFoundError } from "../../error/property/property.error.js";
import { DeleteRentalError } from "../../error/rental/rental.error.js";
import type { PropertyRepository } from "../../repository/property/propertyRepository.js";
import type { RentalPropertyRepository } from "../../repository/rental/rentalPropertyRepository.js";
import type { GetRentalService } from "./getRentalService.js";
import type { IDeleteRentalPropertyService } from "./types/IDeleteRentalPropertyService.js";


export class DeleteRentalService implements IDeleteRentalPropertyService {
    constructor(private rentalDb:RentalPropertyRepository,private propertyDb:PropertyRepository, private getRental:GetRentalService){}
      deleteRental = async (id: string) => {
        const rental = await this.getRental.getRental(id)
        const res = await this.rentalDb.delete(id);
        const property = await this. getPropertyById(rental.idProperty)
        this.changeStatus(property,"available")

        if (res) {
          return true;
        }
        throw new DeleteRentalError();
      };
       changeStatus = (property: PropertyDto & { id: string },status:PropertyStatus) => {
          property.status = status
        this.propertyDb.updateProperty(property)
       }
        getPropertyById = async (idProperty: string) => {
           const property = await this.propertyDb.findByPropertyId(idProperty);
           if (property[0]as PropertyDto & { id: string }) {
       

             return  PropertyDto.create(property[0] as PropertyDto & { id: string })
             
           }
           
           throw new PropertyNotFoundError();
         };
     
}