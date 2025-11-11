import { beforeEach, describe, expect, test, vi } from "vitest";
import type { RentalPropertyRepository } from "../../../repository/rental/rentalPropertyRepository.js";
import type { RentalPropertyReturning } from "../../../dto/propertyDto.js";
import { UpdateRentalService } from "../updateRentalService.js";
import { UpdateRentalError } from "../../../error/rental/rental.error.js";

describe("update rental ", () => {
  let rentalRepo: RentalPropertyRepository;
  let mockRental: RentalPropertyReturning;
  let updateService: UpdateRentalService;
  beforeEach(() => {
    rentalRepo = {
      delete: vi.fn(),
      getRental: vi.fn(),
      save: vi.fn(),
      updateRental: vi.fn().mockResolvedValue(true),
    };
    mockRental = {
      id: "c8446cad-52bb-4f2d-a606-84a5816ddea0",
      idUser: "7b521121-de48-4880-96d2-382becb757eb",
      idProperty: "c6e72e5a-03ff-4697-b965-6a1e243a8d71",
      startDate: new Date("2025-10-30"),
      endDate: new Date("2026-10-30"),
      createdAt: new Date("2025-10-30"),
      payment: 9999999,
    };
    updateService = new UpdateRentalService(rentalRepo);
  });

  test("", async () => {
   await  expect(updateService.updateRental(mockRental)).resolves.toBeTruthy();
    expect(rentalRepo.updateRental).toHaveBeenCalledWith(
      expect.objectContaining({
        id: mockRental.id,
        idUser: mockRental.idUser,
      })
    );
  });

  test("", async () => {
    rentalRepo.updateRental = vi.fn().mockResolvedValue(null)
    await expect(updateService.updateRental(mockRental)).rejects.throw(UpdateRentalError)


  });
});
