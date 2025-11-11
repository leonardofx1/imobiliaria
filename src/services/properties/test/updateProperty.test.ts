import { describe, expect, test, vi } from "vitest";
import type { IPropertyRepository } from "../../../repository/property/IPropertyRepository.js";
import { PropertyDto } from "../../../dto/propertyDto.js";
import { UpdatePropertyService } from "../updatePropertyService.js";
import { property } from "zod";
import { PropertyNotFoundError } from "../../../error/property/property.error.js";

describe("update property.", () => {
    test("it should by possible update property.", async () => {
        const existingProperty = new PropertyDto(
            "1",
            "SP",
            456,
            "Rua B",
            "Casa",
            "Desc",
            "available",
            2,
            0,
            800000,
            "owner-456",
            "120m²",
            3,
            2
        );
        const updatedProperty = new PropertyDto(
            "1",
            "SP",
            456,
            "Rua B",
            "Casa Nova",
            "Desc Nova",
            "available",
            2,
            0,
            800000,
            "owner-456",
            "120",
            3,
            2
        );

        const mockRepo: IPropertyRepository = {
            save: vi.fn(),
            deletePropertyById: vi.fn(),
            findAllProperties: vi.fn(),
            findAllPropertiesGarage: vi.fn(),
            findAllPropertiesOwnerId: vi.fn(),
            findByPropertyId: vi.fn().mockResolvedValue([existingProperty]),
            findPropertiesByPrice: vi.fn(),
            updateProperty: vi.fn().mockResolvedValue(undefined),
        };
        const mergeProperty = { ...existingProperty, ...updatedProperty };
        const service = new UpdatePropertyService(mockRepo);
        await service.update(updatedProperty);
        expect(mockRepo.findByPropertyId).toHaveBeenCalledWith(existingProperty.id);
        expect(mockRepo.updateProperty).toHaveBeenCalledWith(mergeProperty);
    });
    test("it should not be possible to update the property.",async  () => {
        const property = new PropertyDto(
            "1",
            "SP",
            456,
            "Rua B",
            "Casa",
            "Desc",
            "available",
            2,
            0,
            800000,
            "owner-456",
            "120m²",
            3,
            2
        );

        const mockRepo: IPropertyRepository = {
            save: vi.fn(),
            deletePropertyById: vi.fn(),
            findAllProperties: vi.fn(),
            findAllPropertiesGarage: vi.fn(),
            findAllPropertiesOwnerId: vi.fn(),
            findByPropertyId: vi.fn().mockResolvedValue([]),
            findPropertiesByPrice: vi.fn(),
            updateProperty: vi.fn().mockResolvedValue(undefined),
        };

        const service = new UpdatePropertyService(mockRepo);
     await expect(service.update(property)).rejects.Throw(PropertyNotFoundError);
    });
});
