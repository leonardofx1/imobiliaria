import fastify, { type FastifyReply, type FastifyRequest } from "fastify";
import { userRoutes } from "../routes/user/user.routes.js";
import { propertyRoutes } from "../routes/property/property.routes.js";
import { serializerCompiler,validatorCompiler } from "fastify-type-provider-zod";
import { errorGlobal } from "../error/errorGlobal/error.global.js";
const server = fastify()
server.register(userRoutes)
server.register(propertyRoutes,{prefix:'/property'})
server.setSerializerCompiler(serializerCompiler)
server.setValidatorCompiler(validatorCompiler)
server.setErrorHandler(errorGlobal
)
const start =async  () => {
    try {
        await server.listen({port:3030})
        console.log('server on ')
    } catch (error) {
        console.error(`$server error : ${error}`)
    }
}
start()