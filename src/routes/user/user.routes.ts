import type { FastifyInstance } from "fastify";
import { UserController } from "../../controllers/user/user.controller.js";
import { createUserFactory } from "../../factory/user/createUser.factory.js";
import { loginUserFactory } from "../../factory/user/loginUser.factory.js";



export const userRoutes = (app:FastifyInstance) => {
    const userControler = new UserController(createUserFactory,loginUserFactory)

    app.post('/user', userControler.save)
    app.post('/user/login',userControler.login)
}