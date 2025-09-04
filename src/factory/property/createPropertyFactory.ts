import { PropertyRepository } from "../../repository/property/propertyRepository.js"
import { CreatePropertyService } from "../../services/properties/createPropertyService.js"


const factoryCreateProperty =()=> {
    const propertyRepository = new PropertyRepository()

    return new CreatePropertyService(propertyRepository)

} 

const createPropertyFactory = factoryCreateProperty()
export {createPropertyFactory}