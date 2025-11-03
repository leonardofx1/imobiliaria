import type { PropertyStatus } from "../db/schema.js";

export class PropertyDto {
  constructor(
    public id: string,
    public city: string,
    public number: number,
    public street: string,
    public title: string,
    public description: string,
    public status: PropertyStatus,
    public vacanciesGarage: number,
    public buildingFloor: number,
    public price: number,
    public ownerId: string,
    public area: string,
    public bedrooms: number,
    public bathrooms: number
  ) {}
  static create = (property: PropertyDto) => {
    return new PropertyDto(
      property.id = property.id ?? "",
      property.city,
      property.number,
      property.street ?? "",
      property.title,
      property.description,
      property.status,
      property.vacanciesGarage,
      property.buildingFloor ?? 0,
      property.price,
      property.ownerId,
      property.area,
      property.bedrooms,
      property.bathrooms,
    );
  };
}

export class Expenses {
  constructor(
    public id: string,
    public imovelId: string,
    public condoFee: number,
    public propertyTax: number,
    public maintenaceCosts: number
  ) {
    this.id = id;
    this.imovelId = imovelId;
    this.condoFee = condoFee;
    this.maintenaceCosts = maintenaceCosts;
    this.propertyTax = propertyTax;
  }
}

export class RentalPropertyDto {
  constructor(
    public idUser: string,
    public idProperty: string,
    public payment: number,
    public startDate: Date,
    public endDate: Date,
    public createdAt: Date
  ) {
    this.idUser = idUser;
    this.idProperty = idProperty;
    this.startDate = startDate;
    this.endDate = endDate;
    this.createdAt = createdAt;
    this.payment = payment;
  }
}
export class RentalPropertyReturning {
  constructor(
    public id: string,
    public idUser: string,
    public idProperty: string,
    public startDate: Date,
    public endDate: Date,
    public createdAt:Date,
    public payment: number
  ) {}
  static create = (rental: RentalPropertyDto & { id: string }) => {
    return new RentalPropertyReturning(
      rental.id,
      rental.idUser,
      rental.idProperty,
      rental.startDate,
      rental.endDate,
      rental.createdAt,
      rental.payment
    );
  };
}
