import type { FastifyInstance } from "fastify";
import { rentalFactory } from "../../factory/rental/rentalFactory.js";
import { RentalController } from "../../controllers/rental/rental.controller.js";





export const rentalRoutes = (app:FastifyInstance)=> {
    const rental = new RentalController(rentalFactory)
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