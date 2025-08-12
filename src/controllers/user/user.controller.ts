import type { FastifyReply, FastifyRequest } from "fastify";
import { createUserValidation } from "../../validations/user/user.validations.js";
import { createUserFactory } from "../../factory/user/CreateUser.factory.js";
import { CreateUserDto } from "../../dto/userDto.js";
import { UserAlreadyExists } from "../../error/user/user.error.js";




export class UserController {
    consatructor(){}


    save = async (req:FastifyRequest,reply:FastifyReply) => {
     try{
         const {age,email,name,password,role} =  createUserValidation.parse(req.body)

            const userService = await createUserFactory().save(new CreateUserDto(name,email,password,age,role))
            reply.status(200).send({message:'usuário criado com sucesso.'})

     }catch(error) {

        if(error instanceof  UserAlreadyExists) {
            reply.status(409).send({message:'Esse usuário já existe. '})
        }
     }
        
      
        
    }
    
}