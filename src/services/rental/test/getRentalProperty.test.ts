import { beforeEach, describe, expect, test, vi } from "vitest";

import { RentalPropertyReturning } from "../../../dto/propertyDto.js";

import { GetRentalService } from "../getRentalService.js";
import type { RentalPropertyRepository } from "../../../repository/rental/rentalPropertyRepository.js";
import { RentalNotFoundError } from "../../../error/rental/rental.error.js";

describe("", () => {
  let rentalRepo: RentalPropertyRepository;
  let mockRental: RentalPropertyReturning;
  let rentalService: GetRentalService;
  beforeEach(() => {
    mockRental = {
      id: "c8446cad-52bb-4f2d-a606-84a5816ddea0",
      idUser: "7b521121-de48-4880-96d2-382becb757eb",
      idProperty: "c6e72e5a-03ff-4697-b965-6a1e243a8d71",
      startDate: new Date("2025-10-30"),
      endDate: new Date("2026-10-30"),
      createdAt: new Date("2025-10-30"),
      payment: 99999999999,
    };
    rentalRepo = {
      delete: vi.fn(),
      getRental: vi
        .fn()
        .mockResolvedValue(RentalPropertyReturning.create(mockRental)),
      save: vi.fn(),
      updateRental: vi.fn(),
    };

    rentalService = new GetRentalService(rentalRepo);
  });

  test("should return a rental after receiving the ID ", async () => {
   await rentalService.getRental(mockRental.id);
    expect(rentalRepo.getRental).toHaveBeenCalledWith(mockRental.id);
   await expect(rentalService.getRental(mockRental.id)).resolves.toEqual(mockRental)
  });
  test("if getRental does not return a rental, it should throw a RentalNotFoundError. ",async ()=> {
    rentalRepo.getRental = vi.fn().mockResolvedValue(null)
    await expect(rentalService.getRental(mockRental.id)).rejects.throw(RentalNotFoundError)
  })
});
