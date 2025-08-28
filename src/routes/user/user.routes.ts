import type { FastifyInstance } from "fastify";
import { UserController } from "../../controllers/user/user.controller.js";

import { loginUserFactory } from "../../factory/user/loginUser.factory.js";
import { createUserFactory } from "../../factory/user/CreateUser.factory.js";
import { createUserValidation } from "../../validations/user/user.validations.js";




export const userRoutes = (app:FastifyInstance) => {
    const userControler = new UserController(createUserFactory,loginUserFactory)

    app.post('/user',{
    schema: {
    body: createUserValidation, 
  }
    }, userControler.save)
    app.post('/user/login',userControler.login)
}