import type { FastifyInstance } from "fastify";
import { UserController } from "../../controllers/user/user.controller.js";



export const userRoutes = (app:FastifyInstance) => {
    const userControler = new UserController()

    app.post('/user', userControler.save)
}