import { PropertyRepository } from "../../repository/property/propertyRepository.js"
import { FindAllPropertiesService } from "../../services/properties/findAllPropertiesService.js"
import { FindPropertyOwnerIdService } from "../../services/properties/findPropertyOwnerId.js"

const findAllPropertiesOwnerId =()=> {
    const repository = new PropertyRepository()

    return new FindPropertyOwnerIdService(repository)
}

const findAllPropertiesOwnerIdFactory = findAllPropertiesOwnerId()

export {findAllPropertiesOwnerIdFactory}