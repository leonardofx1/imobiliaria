import { beforeEach, describe, expect, test, vi } from "vitest";
import type { RentalPropertyRepository } from "../../../repository/rental/rentalPropertyRepository.js";
import type { PropertyRepository } from "../../../repository/property/propertyRepository.js";
import {
  PropertyDto,
  RentalPropertyReturning,
} from "../../../dto/propertyDto.js";
import { DeleteRentalService } from "../deleteRentalService.js";

import { GetRentalService } from "../getRentalService.js";

import type { IDeleteRentalPropertyService } from "../types/IDeleteRentalPropertyService.js";

describe("delete rental ", () => {
  let rentalRepo: RentalPropertyRepository;
  let mockPropertyRepo: PropertyRepository;
  let mockProperty: PropertyDto & { id: String };
  let mockRental: RentalPropertyReturning;
  let getRentalRepo: GetRentalService;
  let rentalService: IDeleteRentalPropertyService;

  beforeEach(() => {
    mockProperty = {
      id: "c6e72e5a-03ff-4697-b965-6a1e243a8d71",
      city: "São Paulo",
      number: 123,
      street: "Avenida Paulista",
      title: "Apartamento Luxuoso no Centro",
      description:
        "Apartamento com 3 quartos, vista panorâmica, 2 vagas de garagem e acabamento de alto padrão. Próximo ao metrô e comércio.",
      status: "available",
      vacanciesGarage: 2,
      buildingFloor: 15,
      price: 5000,
      ownerId: "7b521121-de48-4880-96d2-382becb757eb",
      area: "95m²",
      bedrooms: 3,
      bathrooms: 2,
    };
    mockRental = {
      id: "c8446cad-52bb-4f2d-a606-84a5816ddea0",
      idUser: "7b521121-de48-4880-96d2-382becb757eb",
      idProperty: "c6e72e5a-03ff-4697-b965-6a1e243a8d71",
      startDate: new Date("2025-10-30"),
      endDate: new Date("2026-10-30"),
      createdAt: new Date("2025-10-30"),
      payment: mockProperty.price * 2,
    };
    rentalRepo = {
      delete: vi.fn().mockResolvedValue(PropertyDto.create(mockProperty)),
      getRental: vi
        .fn()
        .mockResolvedValue(RentalPropertyReturning.create(mockRental)),
      save: vi.fn(),
      updateRental: vi.fn(),
    };
    mockPropertyRepo = {
      deletePropertyById: vi.fn(),
      findAllProperties: vi.fn(),
      findAllPropertiesGarage: vi.fn(),
      findAllPropertiesOwnerId: vi.fn(),
      findByPropertyId: vi
        .fn()
        .mockResolvedValue([PropertyDto.create(mockProperty)]),
      findPropertiesByPrice: vi.fn(),
      save: vi.fn(),
      updateProperty: vi.fn(),
    };

    getRentalRepo = new GetRentalService(rentalRepo);
    rentalService = new DeleteRentalService(
      rentalRepo,
      mockPropertyRepo,
      getRentalRepo
    );
  });
  test("getRental should receive an ID and return a rental", async () => {
    await rentalService.deleteRental(mockRental.id);
    expect(rentalRepo.getRental).toHaveBeenCalledTimes(1);
    expect(rentalRepo.getRental).toHaveBeenCalledWith(mockRental.id);
  });
  test("delete repository should receive an ID.", async () => {
    await rentalService.deleteRental(mockRental.id);
    expect(rentalRepo.delete).toHaveBeenCalledOnce();
    expect(rentalRepo.delete).toHaveBeenCalledWith(mockRental.id);
  });
  test("findByPropertyId should receive an ID property", async () => {
    await rentalService.deleteRental(mockRental.id);
    expect(mockPropertyRepo.findByPropertyId).toHaveBeenCalledOnce();
    expect(mockPropertyRepo.findByPropertyId).toHaveBeenCalledWith(
      mockRental.idProperty
    );
  });

  test("changeStatus should receive a property and a status equal to available",async ()=> {
    const spystatus = vi.spyOn(rentalService,"changeStatus")
    await rentalService.deleteRental(mockRental.id)

    expect(rentalService.changeStatus).toHaveBeenCalledOnce()
    expect(rentalService.changeStatus).toHaveBeenCalledWith(mockProperty,'available')
  })
});

