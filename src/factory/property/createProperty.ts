import { PropertyRepository } from "../../repository/property/propertyRepository.js"
import { CreatePropertyService } from "../../services/properties/createProperty.js"


const createPropertyFactory =()=> {
    const propertyRepository = new PropertyRepository()

    return new CreatePropertyService(propertyRepository)

} 

const propertyFactory = createPropertyFactory()
export {propertyFactory}