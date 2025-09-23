import { PropertyRepository } from "../../repository/property/propertyRepository.js"
import { FindAllPropertiesGarageService } from "../../services/properties/findAllPropertyGarageService.js"


const findAllPropertiesGarage =()=> {
    const propertyRepository = new PropertyRepository()

    return new FindAllPropertiesGarageService(propertyRepository)
}

const findAllPropertiesGarageFactory = findAllPropertiesGarage()

export {findAllPropertiesGarageFactory}