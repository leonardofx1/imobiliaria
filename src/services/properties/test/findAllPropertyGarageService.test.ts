import { describe, expect, test, vi } from "vitest";
import type { IPropertyRepository } from "../../../repository/property/IPropertyRepository.js";
import { PropertyDto } from "../../../dto/propertyDto.js";
import { FindAllPropertiesGarageService } from "../findAllPropertyGarageService.js";
import { PropertyNotFoundError, QuantityOfGarageError } from "../../../error/property/property.error.js";


describe('findAllPropertiesGarageService',async ()=> {

    test("it should by possible to filter properties by the number of garages.", ()=> {
            const mockRepo: IPropertyRepository = {
      save: vi.fn(),
      deletePropertyById: vi.fn(),
      findAllProperties: vi.fn(),
      findAllPropertiesGarage: vi.fn().mockResolvedValue([new PropertyDto(   '', 'SP', 456, 'Rua B', 'Casa', 'Desc', 
      "available", 2, 0, 800000, 'owner-456', 
      '120m²', 3, 2),new PropertyDto(   '', 'SP', 456, 'Rua B', 'Casa', 'Desc', 
      "available", 2, 0, 800000, 'owner-456', 
      '120m²', 3, 2)]),
      findAllPropertiesOwnerId: vi.fn(),
      findByPropertyId: vi.fn(),
      findPropertiesByPrice: vi.fn(),
      updateProperty: vi.fn(),
    };

    const service = new FindAllPropertiesGarageService(mockRepo)
    expect(service.findAllPropertiesGarage(0,15)).resolves.toHaveLength(2)
    })
    test('filter parameters of propiertes by number of garages invalid', ()=> {
                const mockRepo: IPropertyRepository = {
      save: vi.fn(),
      deletePropertyById: vi.fn(),
      findAllProperties: vi.fn(),
      findAllPropertiesGarage: vi.fn().mockResolvedValue([new PropertyDto(   '', 'SP', 456, 'Rua B', 'Casa', 'Desc', 
      "available", 2, 0, 800000, 'owner-456', 
      '120m²', 3, 2),new PropertyDto(   '', 'SP', 456, 'Rua B', 'Casa', 'Desc', 
      "available", 2, 0, 800000, 'owner-456', 
      '120m²', 3, 2)]),
      findAllPropertiesOwnerId: vi.fn(),
      findByPropertyId: vi.fn(),
      findPropertiesByPrice: vi.fn(),
      updateProperty: vi.fn(),
    };
    const service = new FindAllPropertiesGarageService(mockRepo)
    expect(service.findAllPropertiesGarage(20,10)).rejects.toThrow(QuantityOfGarageError)
    })
    test("it should not be possible to filter by the number of garages.", ()=> {
                 const mockRepo: IPropertyRepository = {
      save: vi.fn(),
      deletePropertyById: vi.fn(),
      findAllProperties: vi.fn(),
      findAllPropertiesGarage: vi.fn().mockResolvedValue([]),
      findAllPropertiesOwnerId: vi.fn(),
      findByPropertyId: vi.fn(),
      findPropertiesByPrice: vi.fn(),
      updateProperty: vi.fn(),
    };
    const service = new FindAllPropertiesGarageService(mockRepo)

    expect(service.findAllPropertiesGarage(0, 10)).rejects.toThrow(PropertyNotFoundError)
    })
})