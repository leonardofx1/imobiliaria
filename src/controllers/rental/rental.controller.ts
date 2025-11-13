import type { FastifyRequest, FastifyReply } from "fastify";
import type { IRentalController } from "./IRental.controller.js";

import {
  RentalPropertyDto,
  RentalPropertyReturning,
} from "../../dto/propertyDto.js";

import {
  PaymentRentalError,
  RentalNotFoundError,
  UpdateRentalError,
  ValidateDateError,
} from "../../error/rental/rental.error.js";
import type { ICreateRentalProperty } from "../../services/rental/types/IRentalProperty.js";
import type { IDeleteRentalPropertyService } from "../../services/rental/types/IDeleteRentalPropertyService.js";
import type { IUpdateRentalService } from "../../services/rental/types/IUpdateRentalService.js";
import type { IGetRentalService } from "../../services/rental/types/IGetRentalService.js";

export class RentalController implements IRentalController {
  constructor(private createRentalService: ICreateRentalProperty,private deleteRental:IDeleteRentalPropertyService,private updateRental:IUpdateRentalService,private getRentalService:IGetRentalService) {}
  create = async (req: FastifyRequest, reply: FastifyReply) => {

    try {
      const rental = req.body as RentalPropertyDto;

      const dateNow = new Date();
      this.createRentalService.create(
        new RentalPropertyDto(
          rental.idUser,
          rental.idProperty,
          rental.payment,
          new Date(rental.startDate),
          new Date(rental.endDate),
          dateNow
        )
      );

      reply.status(200).send({ message: "Sucessfully rented." });
    } catch (error) {

      if (error instanceof PaymentRentalError) {
        reply.status(400).send({
          error: "Payment error",
          message: "Invalid payment.",
          details: error.message,
        });
      }
  
      if(error instanceof ValidateDateError){
        reply.status(400).send({error:"Date Error",message:"start date greater than end date. ",details:error.message})
      }
    }
  };
  delete = async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const { idRental } = req.params as { idRental: string };
      this.deleteRental.deleteRental(idRental);
      reply.status(204).send({ message: "delete successfully from rent." });
    } catch (error) {
      reply.status(400).send({ message: "Error Deleting rental. " });
    }
  };
  update = async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const rental = req.body as RentalPropertyReturning;
      this.updateRental.updateRental(
         RentalPropertyReturning.create(rental)
        
      );
      reply.status(200).send({message:"update succesfully."})
    } catch (error) {
      if (error instanceof UpdateRentalError) {
        reply.status(400).send({ message: new UpdateRentalError().message });
      }
    }
  };

  getRental = async (req: FastifyRequest, reply: FastifyReply) => {
    
    try {
      const {id} = req.params as {id:string}
     
      const rental = await this.getRentalService.getRental(id)
      reply.status(200).send(rental)
    } catch (error) {
   
      if(error instanceof RentalNotFoundError){
        reply.status(404).send({error:"Rental Not Found",message:"Rental Not Found.",details:error.message})
      }
    }
  }
}
