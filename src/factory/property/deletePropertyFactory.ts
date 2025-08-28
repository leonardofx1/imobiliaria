import { PropertyRepository } from "../../repository/property/propertyRepository.js"
import { DeletePropertyService } from "../../services/properties/deletePRoperty.js"


export const propertyDeleteFactory = ()=> {

    const repository = new PropertyRepository()
    const service = new DeletePropertyService(repository)
    return service
}
const deletePropertyFactory = propertyDeleteFactory()
export {deletePropertyFactory}