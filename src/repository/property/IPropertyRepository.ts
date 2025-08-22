import type { PropertyDto } from "../../dto/propertyDto.js";


export interface IPropertyRepository {
    save: (property:PropertyDto) => Promise<{id:string}[]|[]>
    findByPropertyId:(id:string) => Promise<PropertyDto[]>
    findAllProperties:()=> Promise<PropertyDto[]>
    findPropertiesByPrice:(initialValue:number,endValue:number) => Promise<PropertyDto[]| []>
    findAllPropertiesOwnerId:(ownerId:string) => Promise<PropertyDto[]| []>
    findAllPropertiesGarage : (amountOfGarage:number)=>Promise<PropertyDto[]>
    deletePropertyById:(id:string) => Promise<PropertyDto[]>
    updateProperty:(_property:PropertyDto)=> Promise<PropertyDto[]>
}