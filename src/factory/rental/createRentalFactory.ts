import { PropertyRepository } from "../../repository/property/propertyRepository.js"
import { RentalPropertyRepository } from "../../repository/rental/rentalPropertyRepository.js"
import { CreateRentalPropertyService } from "../../services/rental/createrentalPropertyService.js"



const rental = ()=> {

    const propertyRepo = new PropertyRepository()
    const rentalRepo = new RentalPropertyRepository()

    return new CreateRentalPropertyService(propertyRepo,rentalRepo)
}

const createRentalFactory = rental()
export {createRentalFactory}