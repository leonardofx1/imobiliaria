import { PropertyRepository } from "../../repository/property/propertyRepository.js"
import { FindPropertiesByPrice } from "../../services/properties/findPropertiesByPriceService.js"

const findPropertiesByPrice = ()=> {
    const repository = new PropertyRepository()
    
    return new FindPropertiesByPrice(repository)
}

const findPropertiesByPriceFactory = findPropertiesByPrice()
export {findPropertiesByPriceFactory}