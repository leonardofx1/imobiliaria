import type { FastifyInstance } from "fastify";
import { UserController } from "../../controllers/user/user.controller.js";

import { loginUserFactory } from "../../factory/user/loginUser.factory.js";
import { createUserFactory } from "../../factory/user/CreateUser.factory.js";



export const userRoutes = (app:FastifyInstance) => {
    const userControler = new UserController(createUserFactory,loginUserFactory)

    app.post('/user', userControler.save)
    app.post('/user/login',userControler.login)
}