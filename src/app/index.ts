import fastify  from "fastify";
import { userRoutes } from "../routes/user/user.routes.js";
import { propertyRoutes } from "../routes/property/property.routes.js";
import { jsonSchemaTransform, serializerCompiler,validatorCompiler, type ZodTypeProvider } from "fastify-type-provider-zod";
import { errorGlobal } from "../error/errorGlobal/error.global.js";
import{ fastifyJwt,} from "@fastify/jwt";
import { authenticate } from "../utils/jwt/hookAuthenticate.js";
import fastifySwaggerUi from '@fastify/swagger-ui';
import fastifySwagger from "@fastify/swagger";
import z from "zod";
export const server = fastify()
server.setSerializerCompiler(serializerCompiler)
server.setValidatorCompiler(validatorCompiler)
server.setErrorHandler(errorGlobal
)
server.register(fastifyJwt,{secret:'my-secret'})
server.decorate('authenticate',authenticate)
server.register(fastifySwagger,{
    openapi:{
        info:{
            title:'my api',
            description:'documentação auto.',
            version:'1.0.10'
        },
    },
    transform: jsonSchemaTransform,

})
server.register(fastifySwaggerUi,{routePrefix:'docs',uiConfig:{
    docExpansion:"full",
    deepLinking:true
}})
server.after(() => {
    
server.register(userRoutes)
server.register(propertyRoutes)

  server.withTypeProvider<ZodTypeProvider>().get('/hello', {
    schema: {
      response: {
        200: z.object({
          message: z.string(),
        }),
      },
    },
  }, async (request, reply) => {
    return reply.send({ message: 'Hello world!' })
  });
})
const start =async  () => {
    try {
        await server.listen({port:3030})
        console.log('server on ')
    } catch (error) {
        console.error(`$server error : ${error}`)
    }
}
start()