import { PropertyRepository } from "../../repository/property/propertyRepository.js"
import { FindAllPropertiesService } from "../../services/properties/findAllPropertiesService.js"


const findAllProperties = () => {
    const propertyRepository = new PropertyRepository()
    const findRepo = new FindAllPropertiesService(propertyRepository)
    return findRepo
}
const findAllPropertiesFactory = findAllProperties()
export {findAllPropertiesFactory}