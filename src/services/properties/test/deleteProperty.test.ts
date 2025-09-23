import { describe, expect, test, vi } from "vitest";
import { DeletePropertyService } from "../deletePropertyService.js";
import type { IPropertyRepository } from "../../../repository/property/IPropertyRepository.js";
import { PropertyDto } from "../../../dto/propertyDto.js";
import { propertyDeleteFactory } from "../../../factory/property/deletePropertyFactory.js";
import { PropertyDeleteError } from "../../../error/property/property.error.js";



describe(" delete a  property.",  ()=> {
    
 test('should delete a property.',async ()=> {
      const mockRepo: IPropertyRepository = {
      save: vi.fn(),
      deletePropertyById: vi.fn().mockResolvedValue([new PropertyDto(   '', 'SP', 456, 'Rua B', 'Casa', 'Desc', 
      "available", 2, 0, 800000, 'owner-456', 
      '120m²', 3, 2)]),
      findAllProperties: vi.fn(),
      findAllPropertiesGarage: vi.fn(),
      findAllPropertiesOwnerId: vi.fn(),
      findByPropertyId: vi.fn(),
      findPropertiesByPrice: vi.fn(),
      updateProperty: vi.fn(),
    };

    const serviceDelete = new  DeletePropertyService(mockRepo)
    await expect( serviceDelete.deleteProperty('')).resolves.toBeTruthy()
 })
 test('it should not be possible to delete a property',async ()=> {
       const mockRepo: IPropertyRepository = {
      save: vi.fn(),
      deletePropertyById: vi.fn().mockResolvedValue([]),
      findAllProperties: vi.fn(),
      findAllPropertiesGarage: vi.fn(),
      findAllPropertiesOwnerId: vi.fn(),
      findByPropertyId: vi.fn(),
      findPropertiesByPrice: vi.fn(),
      updateProperty: vi.fn(),
    };

    const serviceDelete = new DeletePropertyService(mockRepo)
   await expect( serviceDelete.deleteProperty('')).rejects.toThrow(PropertyDeleteError)

 })

})