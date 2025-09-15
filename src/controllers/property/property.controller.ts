import type { FastifyRequest, FastifyReply } from "fastify";
import type { IdProperty, IPropertyController } from "./IProperty.js";

import { PropertyDto } from "../../dto/propertyDto.js";

import { randomUUID } from "node:crypto";

import type { ICreatePropertyService } from "../../services/properties/types/ICreatePropertyService.js";
import type { IDeletePropertyService } from "../../services/properties/types/IDeletePropertyService.js";
import { PorpertyDeleteError, PropertyNotFoundError, PropertyNotUpdate } from "../../error/property/property.error.js";
import type { IUpdatePropertyService } from "../../services/properties/types/IUpdatePropertyService.js";

import type { IFindAllPropertiesService } from "../../services/properties/types/IFindAllPropertiesService.js";
import type { IFindPropertyOwnerId } from "../../services/properties/types/IFindPropertyOwnerId.js";
import { DrizzleQueryError } from "drizzle-orm";
import type { IFindPropertyById } from "../../services/properties/types/IFindPropertyById.Service.js";
import { errorMapDrizzle } from "../../error/drizzleError/drizzleError.js";

export class PropertyController implements IPropertyController {
  constructor(
    private savePropertyService: ICreatePropertyService,
    private deletePropertyService: IDeletePropertyService,
    private updatePropertyService: IUpdatePropertyService,
    private findAllPropertyService:IFindAllPropertiesService,
    private findPropertyOwnerIdService:IFindPropertyOwnerId,
    private findPropertyById:IFindPropertyById
    ) {}

  save = async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const {
        city,
        area,
        bathrooms,
        bedrooms,
        description,
        number,
        ownerId,
        price,
        street,
        title,
        type,
        vacanciesGarage,
        buildingFloor,
      } = req.body as PropertyDto;
      const uuid = randomUUID();

      this.savePropertyService.save(
        new PropertyDto(
          uuid,
          city,
          number,
          street,
          title,
          description,
          type,
          vacanciesGarage,
          buildingFloor,
          price,
          ownerId,
          area,
          bedrooms,
          bathrooms
        )
      );
      reply
        .status(201)
        .send({ message: "The property has been successfully created." });
    } catch (error) {
      reply.status(500).send({ message: "internal server error", error });
    }
  };

  deletePropertyId = async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const { idProperty } = req.params as { idProperty: string };
      const isDeleted = await this.deletePropertyService.deleteProperty(
        idProperty
      );
      if (isDeleted) {
        reply.code(204).send();
      }
    } catch (error) {
      if (error instanceof PorpertyDeleteError) {
        reply
          .code(404)
          .send({ error: "Property not found or already deleted." });
      }
    }
  };
  updateProperty = async (req: FastifyRequest<{Params:{idProperty:string}}>, reply: FastifyReply) => {
    try {
      const { idProperty } = req.params;
      
      const {
        city,
        area,
        bathrooms,
        bedrooms,
        description,
        number,
        ownerId,
        price,
        street,
        title,
        type,
        vacanciesGarage,
        buildingFloor,
      } = req.body as PropertyDto;
      await this.updatePropertyService.update( new PropertyDto(
          idProperty,
          city,
          number,
          street,
          title,
          description,
          type,
          vacanciesGarage,
          buildingFloor,
          price,
          ownerId,
          area,
          bedrooms,
          bathrooms
        ))
        reply.status(204)
    } catch (error) {
   
      if(error instanceof PropertyNotFoundError) {
        reply.status(404).send({message:'property not found could not be updated.'})
      }
      if(error instanceof PropertyNotUpdate){
        reply.status(400).send({message:'invalid data for update.'})
      }
    }
  };
  findAllProperties= async (req: FastifyRequest, reply: FastifyReply) => {
    try {
          const properties = await this.findAllPropertyService.findAllProperties()
          reply.status(200).send(properties)
    } catch (error) {
      if(error instanceof PropertyNotFoundError) {
        reply.status(404).send({message:'properties not found.'})
      }
    }
  }
  findAllPropertiesOwnerId=async (req: FastifyRequest<{Params:{ownerId:string}}>, reply: FastifyReply) => {
      try {
        const {ownerId} = req.params
    
        const properties = await this.findPropertyOwnerIdService.findPropertyOwnerId(ownerId)

        reply.status(200).send(properties)

      } catch (error) {
        if(error instanceof DrizzleQueryError){
          const pgError:any = error.cause
          const mapError =errorMapDrizzle(pgError.code)
          mapError? reply.status(mapError?.status).send({message:mapError?.message}):reply.status(500).send({message:'Internal server error.'})
        }
        if(error instanceof PropertyNotFoundError){
          reply.status(404).send({message:'Property not found.'})
        }
      }
  }
  findByPropertyId=async  (req: FastifyRequest<{Params:IdProperty}>, reply: FastifyReply) => {
    try {
        const propertyId = req.params.idProperty
      const property = await this.findPropertyById.findPropertyById(propertyId)

      reply.status(200).send(property)
    } catch (error) {
        if(error instanceof PropertyNotFoundError) {
          reply.status(404).send({mensagem:'Property not found.'})
        }
         if(error instanceof DrizzleQueryError){
          const pgError:any = error.cause
          const mapError =errorMapDrizzle(pgError.code)
          mapError? reply.status(mapError?.status).send({message:mapError?.message}):reply.status(500).send({message:'Internal server error.'})
        }
    }

  }
  findAllPropertiesGarage: (req: FastifyRequest, reply: FastifyReply) => void;
  
  findPropertiesByPrice: (req: FastifyRequest, reply: FastifyReply) => void;
}
