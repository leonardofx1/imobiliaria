import { PropertyRepository } from "../../repository/property/propertyRepository.js"
import { RentalPropertyRepository } from "../../repository/rental/rentalPropertyRepository.js"
import { DeleteRentalService } from "../../services/rental/deleteRentalService.js"
import { GetRentalService } from "../../services/rental/getRentalService.js"



const deleteRental = ()=> {

    const repo= new RentalPropertyRepository()
    const dbProperty = new PropertyRepository()
    const getRental = new GetRentalService(repo)
    const service = new DeleteRentalService(repo,dbProperty,getRental)
    return service
}
const deleteRentalFactory = deleteRental()

export {deleteRentalFactory}