import { describe, expect, test, vi } from "vitest";
import type { IPropertyRepository } from "../../../repository/property/IPropertyRepository.js";
import { PropertyDto } from "../../../dto/propertyDto.js";
import { FindPropertyByIdService } from "../findPropertyByIdService.js";
import { PropertyNotFoundError } from "../../../error/property/property.error.js";


describe('find by id', () => {
  test('it should be possible to find the property by its id.', async () => {
    const property = new PropertyDto('', 'SP', 456, 'Rua B', 'Casa', 'Desc',
      "available", 2, 0, 800000, 'owner-456',
      '120m²', 3, 2)
    const mockRepo: IPropertyRepository = {
      save: vi
        .fn(),
      deletePropertyById: vi.fn(),
      findAllProperties: vi.fn(),
      findAllPropertiesGarage: vi.fn(),
      findAllPropertiesOwnerId: vi.fn(),
      findByPropertyId: vi.fn().mockResolvedValue([property]),
      findPropertiesByPrice: vi.fn(),
      updateProperty: vi.fn(),
    };

    const service = new FindPropertyByIdService(mockRepo)

    await expect(service.findPropertyById(property.id)).resolves.toEqual([property])


  })
  test('the property cannot be found by ID.', async () => {
    const mockRepo: IPropertyRepository = {
      save: vi
        .fn(),
      deletePropertyById: vi.fn(),
      findAllProperties: vi.fn(),
      findAllPropertiesGarage: vi.fn(),
      findAllPropertiesOwnerId: vi.fn(),
      findByPropertyId: vi.fn().mockResolvedValue([]),
      findPropertiesByPrice: vi.fn(),
      updateProperty: vi.fn(),
    };
    const service = new FindPropertyByIdService(mockRepo)
    await expect(service.findPropertyById('')).rejects.toThrow(PropertyNotFoundError)
  })
})