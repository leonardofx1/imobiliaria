import fastify from "fastify";
import { userRoutes } from "../routes/user/user.routes.js";

const server = fastify()
server.register(userRoutes)



const start =async  () => {
    try {
        await server.listen({port:3000})
        console.log('server on ')
    } catch (error) {
        console.error(`$server error : ${error}`)
    }
}
start()