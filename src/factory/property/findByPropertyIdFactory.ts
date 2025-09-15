import { PropertyRepository } from "../../repository/property/propertyRepository.js"
import { FindPropertyByIdService } from "../../services/properties/findPropertyByIdService.js"


const findPropertyId = ()=> {
    const repository = new PropertyRepository()
    return  new FindPropertyByIdService(repository)
}
const findByPropertyIdFactory = findPropertyId()
export {findByPropertyIdFactory}