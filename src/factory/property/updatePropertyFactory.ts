import { PropertyRepository } from "../../repository/property/propertyRepository.js"
import { UpdatePropertyServie } from "../../services/properties/updatePropertyService.js"


const  updateProperty = () => {

    const db = new PropertyRepository()

    return new UpdatePropertyServie(db)
}

const updatePropertyFactory = updateProperty()

export {updatePropertyFactory}