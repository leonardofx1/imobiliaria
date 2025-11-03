import { PropertyRepository } from "../../repository/property/propertyRepository.js"
import { RentalPropertyRepository } from "../../repository/rental/rentalPropertyRepository.js"
import { RentalPropertyService } from "../../services/rental/createrentalPropertyService.js"


const rental = ()=> {

    const propertyRepo = new PropertyRepository()
    const rentalRepo = new RentalPropertyRepository()

    return new RentalPropertyService(propertyRepo,rentalRepo)
}

const rentalFactory = rental()
export {rentalFactory}