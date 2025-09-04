import { PorpertyDeleteError } from "../../error/property/property.error.js";
import type { IPropertyRepository } from "../../repository/property/IPropertyRepository.js";
import type { IDeletePropertyService } from "./types/IDeletePropertyService.js";

export class DeletePropertyService implements IDeletePropertyService {
  constructor(private memoryDb: IPropertyRepository) {}

  deleteProperty = async (id: string) => {

    const property = await this.memoryDb.deletePropertyById(id);
    if (!property[0]) {
      throw new PorpertyDeleteError();
    }
    return true;
  };
}
