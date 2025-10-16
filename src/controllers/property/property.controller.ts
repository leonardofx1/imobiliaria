import type { FastifyRequest, FastifyReply } from "fastify";
import type { IdProperty, IPropertyController } from "./IProperty.js";

import { PropertyDto } from "../../dto/propertyDto.js";

import { randomUUID } from "node:crypto";

import type { ICreatePropertyService } from "../../services/properties/types/ICreatePropertyService.js";
import type { IDeletePropertyService } from "../../services/properties/types/IDeletePropertyService.js";
import {  PropertyDeleteError,PriceError, PropertyNotFoundError, QuantityOfGarageError } from "../../error/property/property.error.js";
import type { IUpdatePropertyService } from "../../services/properties/types/IUpdatePropertyService.js";

import type { IFindAllPropertiesService } from "../../services/properties/types/IFindAllPropertiesService.js";
import type { IFindPropertyOwnerId } from "../../services/properties/types/IFindPropertyOwnerId.js";
import { DrizzleQueryError } from "drizzle-orm";
import type { IFindPropertyById } from "../../services/properties/types/IFindPropertyById.Service.js";
import { errorMapDrizzle } from "../../error/drizzleError/drizzleError.js";
import type { IFindProeprtiesByPriceService } from "../../services/properties/types/IFindPropertiesByPriceService.js";
import type { IFindAllPropertiesGarage } from "../../services/properties/types/IFindAllPropertiesGarageService.js";
import type {  TMaxAndMinProeprtyPrices, TNumberMinAndMaxOfGaragens } from "../../validations/property/property.validations.js";

export class PropertyController implements IPropertyController {
  constructor(
    private savePropertyService: ICreatePropertyService,
    private deletePropertyService: IDeletePropertyService,
    private updatePropertyService: IUpdatePropertyService,
    private findAllPropertyService:IFindAllPropertiesService,
    private findPropertyOwnerIdService:IFindPropertyOwnerId,
    private findPropertyById:IFindPropertyById,
    private  findPropertiesByPriceService:IFindProeprtiesByPriceService,
    private findPropertiesGarage:IFindAllPropertiesGarage,
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
      if (error instanceof PropertyDeleteError) {
        reply
          .code(404)
          .send({ error: "Property not found or already deleted." });
      }
    }
  };
  updateProperty = async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const { idProperty } = req.params as {idProperty:string}
      
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
  findByPropertyById=async  (req: FastifyRequest<{Params:IdProperty}>, reply: FastifyReply) => {
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
  findAllPropertiesGarage=async (req: FastifyRequest, reply: FastifyReply) =>{
      try {
          const numberOfGarages = req.body as TNumberMinAndMaxOfGaragens
  
            const properties = await this.findPropertiesGarage.findAllPropertiesGarage(numberOfGarages.numberMinOfGaragens,numberOfGarages.numberMaxOfGaragens)
          reply.status(200).send(properties)
      } catch (error) {
        if(error instanceof PropertyNotFoundError){
          reply.status(404).send({message:"Property not found"})
        }
        if(error instanceof QuantityOfGarageError){
          reply.status(400).send({message:"Invalid parameters."})
        }
      }
  }
  
  findPropertiesByPrice = async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const prices = req.body as TMaxAndMinProeprtyPrices
      console.log(prices)
      const properties = await this.findPropertiesByPriceService.findPropertiesByPrice(prices.valueMin,prices.valueMax)
      reply.status(200).send(properties)

      
    } catch (error) {
      if(error instanceof PropertyNotFoundError){
        reply.status(404).send({message:"Properties not found."})
      }
      if(error instanceof PriceError){
        reply.status(400).send({message:"Invalid parameters."})
      }
    }
  }
}
