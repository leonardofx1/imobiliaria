import { beforeEach, describe, expect, test, vi } from "vitest";
import type { IPropertyRepository } from "../../../repository/property/IPropertyRepository.js";
import { PropertyDto } from "../../../dto/propertyDto.js";
import { PropertyRepository } from "../../../repository/property/propertyRepository.js";
import { FindPropertiesByPrice } from "../findPropertiesByPriceService.js";
import { PriceError, PropertyNotFoundError } from "../../../error/property/property.error.js";
import type { IFindProeprtiesByPriceService } from "../types/IFindPropertiesByPriceService.js";


describe('find properties by price',()=> {

    test('it should be possible to search for  properties by price.',async ()=> {
        const property = []
        for(let i =0 ; i<=3; i++){
            property.push( new PropertyDto(   '', 'SP', 456, 'Rua B', 'Casa', 'Desc', 
              "available", 2, 0,5050 * i, 'owner-456', 
              '120m²', 3, 2))
        }
         const mockRepo: IPropertyRepository = {
      save: vi.fn(),
      deletePropertyById: vi.fn(),
      findAllProperties: vi.fn(),
      findAllPropertiesGarage: vi.fn(),
      findAllPropertiesOwnerId: vi.fn(),
      findByPropertyId: vi.fn(),
      findPropertiesByPrice: vi.fn().mockResolvedValue(property),
      updateProperty: vi.fn(),
    };
    const service = new FindPropertiesByPrice(mockRepo)
   

     await expect(service.findPropertiesByPrice(0, 1000000)).resolves.toHaveLength(4)
      expect(mockRepo.findPropertiesByPrice).toHaveBeenCalledWith(0, 1000000)

    })
    let mockRepo:IPropertyRepository
    let service:IFindProeprtiesByPriceService
    beforeEach(()=> {
        mockRepo = {
      save: vi.fn(),
      deletePropertyById: vi.fn(),
      findAllProperties: vi.fn(),
      findAllPropertiesGarage: vi.fn(),
      findAllPropertiesOwnerId: vi.fn(),
      findByPropertyId: vi.fn(),
      findPropertiesByPrice: vi.fn().mockResolvedValue([]),
      updateProperty: vi.fn(),
    };
    service = new FindPropertiesByPrice(mockRepo)
   
    })

    test('should throw PriceError when minPrice > maxPrice.',async ()=> {
        await expect(service.findPropertiesByPrice(5000, 0)).rejects.toThrow(PriceError)
    })
    test('should throw PropertyNotFoundError when no properties found.',async ()=>{

      await expect(service.findPropertiesByPrice(0,10)).rejects.toThrow(PropertyNotFoundError)
    })

})