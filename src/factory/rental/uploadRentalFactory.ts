import { RentalPropertyRepository } from "../../repository/rental/rentalPropertyRepository.js"
import { UpdateRentalService } from "../../services/rental/updateRentalService.js"


const updateRental = () => {
    const repo = new RentalPropertyRepository()
    const rental = new UpdateRentalService(repo)
    return rental
}

const updateRentalFactory = updateRental()

export {updateRentalFactory}