import { PropertyRepository } from "../../repository/property/propertyRepository.js"
import { UpdatePropertyService } from "../../services/properties/updatePropertyService.js"


const  updateProperty = () => {

    const db = new PropertyRepository()

    return new UpdatePropertyService(db)
}

const updatePropertyFactory = updateProperty()

export {updatePropertyFactory}