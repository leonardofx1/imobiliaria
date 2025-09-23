import { describe, expect, test, vi } from "vitest";
import type { IPropertyRepository } from "../../../repository/property/IPropertyRepository.js";
import { PropertyDto } from "../../../dto/propertyDto.js";
import { FindAllPropertiesService } from "../findAllPropertiesService.js";
import { PropertyNotFoundError } from "../../../error/property/property.error.js";


describe("find all properties", ()=> {

    test("should be possible to find all properties.",async ()=>{
         const mockRepo: IPropertyRepository = {
      save: vi.fn(),
      deletePropertyById: vi.fn(),
      findAllProperties: vi.fn().mockResolvedValue([new PropertyDto(   '', 'SP', 456, 'Rua B', 'Casa', 'Desc', 
      "available", 2, 0, 800000, 'owner-456', 
      '120m²', 3, 2),new PropertyDto(   '', 'SP', 456, 'Rua B', 'Casa', 'Desc', 
      "available", 2, 0, 800000, 'owner-456', 
      '120m²', 3, 2)]),
      findAllPropertiesGarage: vi.fn(),
      findAllPropertiesOwnerId: vi.fn(),
      findByPropertyId: vi.fn(),
      findPropertiesByPrice: vi.fn(),
      updateProperty: vi.fn(),
    };
    const service = new FindAllPropertiesService(mockRepo)

    expect(await service.findAllProperties()).toHaveLength(2)

    })
    test('not be should to find all properties.',async ()=> {
        const mockRepo: IPropertyRepository = {
      save: vi.fn(),
      deletePropertyById: vi.fn(),
      findAllProperties: vi.fn().mockResolvedValue([]),
      findAllPropertiesGarage: vi.fn(),
      findAllPropertiesOwnerId: vi.fn(),
      findByPropertyId: vi.fn(),
      findPropertiesByPrice: vi.fn(),
      updateProperty: vi.fn(),
    };
    
    const service = new FindAllPropertiesService( mockRepo)
    await expect(service.findAllProperties()).rejects.toThrow(PropertyNotFoundError)
})

})