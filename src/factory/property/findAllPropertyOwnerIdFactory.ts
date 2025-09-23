import { PropertyRepository } from "../../repository/property/propertyRepository.js"

import { FindPropertyOwnerIdService } from "../../services/properties/findPropertyOwnerIdService.js"

const findAllPropertiesOwnerId =()=> {
    const repository = new PropertyRepository()

    return new FindPropertyOwnerIdService(repository)
}

const findAllPropertiesOwnerIdFactory = findAllPropertiesOwnerId()

export {findAllPropertiesOwnerIdFactory}