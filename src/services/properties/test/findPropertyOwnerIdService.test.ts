import { describe, expect, test, vi } from "vitest";
import type { IPropertyRepository } from "../../../repository/property/IPropertyRepository.js";

import { FindPropertiesByPrice } from "../findPropertiesByPriceService.js";
import { PropertyDto } from "../../../dto/propertyDto.js";
import { FindPropertyOwnerIdService } from "../findPropertyOwnerIdService.js";
import { PropertyNotFoundError } from "../../../error/property/property.error.js";

describe('find properties by owner id',()=> {


    test('it should be possible filter properties by owner id',async ()=> {
        const property = [new PropertyDto(   '', 'SP', 456, 'Rua B', 'Casa', 'Desc', 
                    "available", 2, 0,5050, 'owner-456', 
                    '120m²', 3, 2)]
         const mockRepo: IPropertyRepository = {
      save: vi.fn(),
      deletePropertyById: vi.fn(),
      findAllProperties: vi.fn(),
      findAllPropertiesGarage: vi.fn(),
      findAllPropertiesOwnerId: vi.fn().mockResolvedValue(property),
      findByPropertyId: vi.fn(),
      findPropertiesByPrice: vi.fn(),
      updateProperty: vi.fn(),
    };
    const service = new FindPropertyOwnerIdService(mockRepo)
    await expect(service.findPropertyOwnerId('owner-456')).resolves.toEqual(property)
    expect(mockRepo.findAllPropertiesOwnerId).toHaveBeenCalledWith('owner-456')
    })

    test('should throw PropertyNotFoundError for invalid owner id.',async ()=>{
        const mockRepo: IPropertyRepository = {
      save: vi.fn(),
      deletePropertyById: vi.fn(),
      findAllProperties: vi.fn(),
      findAllPropertiesGarage: vi.fn(),
      findAllPropertiesOwnerId: vi.fn().mockResolvedValue([]),
      findByPropertyId: vi.fn(),
      findPropertiesByPrice: vi.fn(),
      updateProperty: vi.fn(),
    };
    const service = new FindPropertyOwnerIdService(mockRepo)
    await expect(service.findPropertyOwnerId('')).rejects.toThrow(PropertyNotFoundError)

    })


})