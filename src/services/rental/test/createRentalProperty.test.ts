import { beforeEach, describe, expect, test, vi } from "vitest";
import { PropertyRepository } from "../../../repository/property/propertyRepository.js";
import { RentalPropertyRepository } from "../../../repository/rental/rentalPropertyRepository.js";
import { CreateRentalPropertyService } from "../createrentalPropertyService.js";
import type { IPropertyRepository } from "../../../repository/property/IPropertyRepository.js";
import { PropertyDto, RentalPropertyDto } from "../../../dto/propertyDto.js";
import {
  PaymentRentalError,
  ValidateDateError,
  ValidateStatusPropertyError,
} from "../../../error/rental/rental.error.js";
import type { ICreatePropertyService } from "../../properties/types/ICreatePropertyService.js";

describe("rented property", () => {
  let property: PropertyDto & { id: string };
  let rentalDto: RentalPropertyDto & { id: string };
  let mockProperty: IPropertyRepository;
  let rental: RentalPropertyRepository;
  beforeEach(async () => {
    property = {
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
    rentalDto = {
      id: "c8446cad-52bb-4f2d-a606-84a5816ddea0",
      idUser: "7b521121-de48-4880-96d2-382becb757eb",
      idProperty: "c6e72e5a-03ff-4697-b965-6a1e243a8d71",
      startDate: new Date("2025-10-30"),
      endDate: new Date("2026-10-30"),
      createdAt: new Date("2025-10-30"),
      payment: property.price * 2 ,
    };

    mockProperty = {
      save: vi.fn(),
      deletePropertyById: vi.fn(),
      findAllProperties: vi.fn(),
      findAllPropertiesGarage: vi.fn(),
      findAllPropertiesOwnerId: vi.fn(),
      findByPropertyId: vi
        .fn()
        .mockResolvedValue([PropertyDto.create(property)]),
      findPropertiesByPrice: vi.fn(),
      updateProperty: vi.fn(),
    };
    rental = {
      delete: vi.fn(),
      getRental: vi.fn(),
      save: vi.fn(),
      updateRental: vi.fn(),
    };
  });
  test("it should rented property.", async () => {
    const rentalService = new CreateRentalPropertyService(mockProperty, rental);

    await rentalService.create(rentalDto);
    property.status = "rented";
    expect(mockProperty.updateProperty).toHaveBeenCalledTimes(1);
  });
  test("the start date cannot be later than the end date of the rental.", async () => {
    const rentalService = new CreateRentalPropertyService(mockProperty, rental);
    rentalDto.startDate = new Date("2027-10-30");

    await expect(rentalService.create(rentalDto)).rejects.throw(
      ValidateDateError
    );
  });
  test("the rental fee must be paid before the rental takes place", async () => {
    const rentalService = new CreateRentalPropertyService(mockProperty, rental);
    rentalDto.payment = 0;

    await expect(rentalService.create(rentalDto)).rejects.throw(
      PaymentRentalError
    );
  });
  test(" change status should receive a property and the status rented. ", async () => {
    const rentalService = new CreateRentalPropertyService(mockProperty, rental);
    const spy = vi.spyOn(rentalService, "changeStatus");
    rentalDto.payment = property.price * 2;
    await rentalService.create(rentalDto);
    
    expect(rentalService.changeStatus).toHaveBeenCalledTimes(1);
    expect(rentalService.changeStatus).toHaveBeenCalledWith(
      expect.objectContaining({
        id: "c6e72e5a-03ff-4697-b965-6a1e243a8d71",
      }),
      "rented"
    );
  });
  test("If the status is not available, it should throw a ValidateRentalError error.",async ()=> {
    property.status = "rented"
    mockProperty.findByPropertyId = vi.fn().mockResolvedValue([PropertyDto.create(property)])
    const rentalService = new CreateRentalPropertyService(mockProperty,rental)

    await expect(rentalService.create(rentalDto)).rejects.throw(ValidateStatusPropertyError)
  })
  test(" updateProperty should receive a property with a status equal to rented.", async ()=> {
    const rentalService = new CreateRentalPropertyService(mockProperty,rental)
    await rentalService.create(rentalDto)
    expect(mockProperty.updateProperty).toHaveBeenCalledWith(
      expect.objectContaining({
        status:"rented"
      })
    )
  })
});
