import { RentalPropertyRepository } from "../../repository/rental/rentalPropertyRepository.js"
import { GetRentalService } from "../../services/rental/getRentalService.js"


const getRental = ()=> {
    const repo = new RentalPropertyRepository()
    const get = new GetRentalService(repo)
    return get
}

const getRentalFactory = getRental()
export {getRentalFactory}