import type { FastifyInstance } from "fastify";
import { createRentalFactory } from "../../factory/rental/createRentalFactory.js";
import { RentalController } from "../../controllers/rental/rental.controller.js";
import { deleteRentalFactory } from "../../factory/rental/deleteRentalFactory.js";
import { updateRentalFactory } from "../../factory/rental/uploadRentalFactory.js";
import { getRentalFactory } from "../../factory/rental/getRentalFactory.js";





export const rentalRoutes = (app:FastifyInstance)=> {

    const rental = new RentalController(createRentalFactory,deleteRentalFactory,updateRentalFactory,getRentalFactory)
    
    app.post('/create',{
        schema :{
            tags:["rental"],
            tile:"renting a property",
            description:"you should create a property lease agreement."
        }
    }
    ,rental.create)
    app.delete('/delete/:idRental',{
        schema:{
            tags:["rental"],
            title:"delete rental",
            description:"You delete a lease agreement by the lease ID."
        }
    },rental.delete)
    app.post('/update',{
        schema:{
            tags:['rental'],
            title:"update rent",
            description:"you should update the property rent",
        }
    }, rental.update)
    app.get('/:id',{
        schema:{
            tags:['rental'],
            title:"get a rental ",
            description:"get rent by identification",

        }
    },rental.getRental)
    }