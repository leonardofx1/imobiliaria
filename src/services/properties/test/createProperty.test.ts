import { describe, expect, it, test, vi } from "vitest";
import { CreatePropertyService } from "../createPropertyService.js";
import type { IPropertyRepository } from "../../../repository/property/IPropertyRepository.js";
import { PropertyDto } from "../../../dto/propertyDto.js";

describe("create property", () => {
  test("should create property successfully.",async  () => {
    const mockRepo: IPropertyRepository = {
      save: vi.fn().mockResolvedValue(["1215412sdfsafds"]),
      deletePropertyById: vi.fn(),
      findAllProperties: vi.fn(),
      findAllPropertiesGarage: vi.fn(),
      findAllPropertiesOwnerId: vi.fn(),
      findByPropertyId: vi.fn(),
      findPropertiesByPrice: vi.fn(),
      updateProperty: vi.fn(),
    };

    const service = new CreatePropertyService(mockRepo);
    const propertyDto = new PropertyDto(   '', 'SP', 456, 'Rua B', 'Casa', 'Desc', 
      "available", 2, 0, 800000, 'owner-456', 
      '120m²', 3, 2)
    service.save(propertyDto)

    expect(mockRepo.save).toHaveBeenCalledWith(
        expect.objectContaining({city:'SP',number:456}
        
        )
    )
  });
});
