
import type { PropertyDto } from "../../dto/propertyDto.js";
import {
  PropertyNotFoundError,
  PropertyNotUpdate,
} from "../../error/property/property.error.js";
import type { IPropertyRepository } from "../../repository/property/IPropertyRepository.js";
import type { IUpdatePropertyService } from "./types/IUpdatePropertyService.js";

export class UpdatePropertyService implements IUpdatePropertyService {
  constructor(private memoryDb: IPropertyRepository) {}

  update = async (property: PropertyDto) => {
   
      const propertyExists = await this.memoryDb.findByPropertyId(property.id);
      if (!propertyExists[0]) {
        throw new PropertyNotFoundError();
      }
      const update = { ...propertyExists[0], ...property };

      await this.memoryDb.updateProperty(update);
   
  };
}
