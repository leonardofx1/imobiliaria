import type { FastifyRequest, FastifyReply } from "fastify";
import type { IPropertyController } from "./IProperty.js";
import { createPropertyValidation } from "../../validations/property/property.validations.js";
import type { IPropertyRepository } from "../../repository/property/IPropertyRepository.js";
import { PropertyDto } from "../../dto/propertyDto.js";

import {randomUUID} from 'node:crypto'

import type { ICreatePropertyService } from "../../services/properties/types/ICreatePropertyService.js";
import type { IDeletePropertyService } from "../../services/properties/types/IDeletePropertyService.js";
import { PorpertyDeleteError } from "../../error/property/property.error.js";


export class PropertyController implements IPropertyController {
  constructor(private savePropertyService:ICreatePropertyService,private deletePropertyService:IDeletePropertyService){

  }

    save = async (req: FastifyRequest, reply: FastifyReply) => {
      try {

        const {city,area,bathrooms,bedrooms,description,number,ownerId,price,street,title,type,vacanciesGarage,buildingFloor} = req.body as PropertyDto
        const uuid = randomUUID()

        this.savePropertyService.save(new PropertyDto(uuid,city,number,street,title,description,type,vacanciesGarage,buildingFloor,price,ownerId,area,bedrooms,bathrooms))

      } catch (error) {
        console.error('deu error: ',error)
      }
    }


    deletePropertyId=async  (req: FastifyRequest, reply: FastifyReply) => {
        try{
        const {idProperty} =  req.params as {idProperty:string}
          const isDeleted = await this.deletePropertyService.deleteProperty(idProperty)
          if(isDeleted){
            reply.code(204).send()
          }
        }catch(error){
          if(error instanceof PorpertyDeleteError){
            reply.code(404).send({error:'Property not found or already deleted.'})
          }

        }
    }
    findAllProperties: (req: FastifyRequest, reply: FastifyReply) => void;
    findAllPropertiesGarage: (req: FastifyRequest, reply: FastifyReply) => void;
    findAllPropertiesOwnerId: (req: FastifyRequest, reply: FastifyReply) => void;
    findAllPropertiesOwnerId: (req: FastifyRequest, reply: FastifyReply) => void;
    findByPropertyId: (req: FastifyRequest, reply: FastifyReply) => void;
    findPropertiesByPrice: (req: FastifyRequest, reply: FastifyReply) => void;
    updateProperty: (req: FastifyRequest, reply: FastifyReply) => void;
}