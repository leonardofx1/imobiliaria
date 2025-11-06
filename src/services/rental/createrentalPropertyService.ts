import type { PropertyStatus } from "../../db/schema.js";
import {
  PropertyDto,
  RentalPropertyDto,

} from "../../dto/propertyDto.js";
import { PropertyNotFoundError } from "../../error/property/property.error.js";
import {
  PaymentRentalError,
  ValidateDateError,
   ValidateStatusPropertyError,
} from "../../error/rental/rental.error.js";
import type { PropertyRepository } from "../../repository/property/propertyRepository.js";
import type { IRentalPropertyRepository } from "../../repository/rental/IRentalPropertyRepository.js";
import type { ICreateRentalProperty } from "./types/IRentalProperty.js";



export class CreateRentalPropertyService implements ICreateRentalProperty {
  taxaPayment: number;
  constructor(
    private dbProperty: PropertyRepository,
    private RentalDb: IRentalPropertyRepository
  ) {
    this.taxaPayment = 0;
  }
  create = async (rentalDto: RentalPropertyDto) => {
    const isValidate = await this.validateRental(rentalDto);
    if (isValidate) {
      this.RentalDb.save(rentalDto);
        const property  = await this.getPropertyById(rentalDto.idProperty)
      this.changeStatus(property, 'rented')

      return true;
    }
    return null;
  };
  getPropertyById = async (idProperty: string) => {
    const property = await this.dbProperty.findByPropertyId(idProperty);
    if (property[0]as PropertyDto & { id: string }) {

      this.taxaPayment = property[0]!.price * 2;
      return  PropertyDto.create(property[0] as PropertyDto & { id: string })
      
    }
    
    throw new PropertyNotFoundError();
  };
  validateRental = async (rental: RentalPropertyDto) => {
    const property = await this.getPropertyById(rental.idProperty);
    this.validateStatus(property.status);
    this.validateDate(rental);
    this.validatePayment(rental);
    return true;
  };
  validateDate = (rental: RentalPropertyDto) => {
    if (rental.startDate >= rental.endDate) {
      throw new ValidateDateError();
    }
    return true;
  };
  validatePayment = (rental: RentalPropertyDto) => {

    if (rental.payment === this.taxaPayment) {

      return true;
    }
    throw new PaymentRentalError();
  };
  validateStatus = (status: string) => {
    if (status !== "available") {
      throw new ValidateStatusPropertyError();
    }
    return true;
  };

 changeStatus = (property: PropertyDto & { id: string },status:PropertyStatus) => {
    property.status = status
  this.dbProperty.updateProperty(property)
 }
}