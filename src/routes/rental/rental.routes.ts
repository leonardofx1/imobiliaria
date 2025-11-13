import type { FastifyInstance } from "fastify";
import { createRentalFactory } from "../../factory/rental/createRentalFactory.js";
import { RentalController } from "../../controllers/rental/rental.controller.js";
import { deleteRentalFactory } from "../../factory/rental/deleteRentalFactory.js";
import { updateRentalFactory } from "../../factory/rental/uploadRentalFactory.js";
import { getRentalFactory } from "../../factory/rental/getRentalFactory.js";
import { rentalCreate, rentalReturning } from "../../validations/rental/rental.validations.js";
import z from "zod";





export const rentalRoutes = (app:FastifyInstance)=> {

    const rental = new RentalController(createRentalFactory,deleteRentalFactory,updateRentalFactory,getRentalFactory)
    
    app.post('/create',{
        schema :{
            tags:["rental"],
            tile:"renting a property",
            description:"you should create a property lease agreement.",
            body:rentalCreate,
            response:{
                200:z.object({message:z.string()}),
                400:z.object({
                    error:z.string(),
                    message:z.string(),
                    details:z.string()
                })
            }
        }
    }
    ,rental.create)
    app.delete('/delete/:idRental',{
        schema:{
            tags:["rental"],
            title:"delete rental",
            description:"You delete a lease agreement by the lease ID.",
            response: {
                204:z.object({message:z.string()}),
                400:z.object({message:z.string()})
            }
        }
    },rental.delete)
    app.post('/update',{
        schema:{
            tags:['rental'],
            title:"update rent",
            description:"you should update the property rent",
            response:{
                200:z.object({message:z.string()}),
                400:z.object({message:z.string()})
            }
        }
    }, rental.update)
    app.get('/:id',{
        schema:{
            tags:['rental'],
            title:"get a rental ",
            description:"get rent by identification",
            response:{
                200:rentalReturning,
                404:z.object({
                    error:z.string(),
                    message:z.string(),
                    details:z.string()
                })
                
            }

        }
    },rental.getRental)
    }