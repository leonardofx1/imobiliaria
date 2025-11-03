import fastify  from "fastify";
import { userRoutes } from "../routes/user/user.routes.js";
import { propertyRoutes } from "../routes/property/property.routes.js";
import { jsonSchemaTransform, serializerCompiler,validatorCompiler, type ZodTypeProvider } from "fastify-type-provider-zod";
import { errorGlobal } from "../error/errorGlobal/error.global.js";
import{ fastifyJwt,} from "@fastify/jwt";
import { authenticate } from "../utils/jwt/hookAuthenticate.js";
import fastifySwaggerUi from '@fastify/swagger-ui';
import fastifySwagger from "@fastify/swagger";
import fastifyMultipart from "@fastify/multipart";
import { imgRoutes } from "../routes/img/img.routes.js";
import fastifyStatic from "@fastify/static";
import path from 'path'
export const server = fastify({forceCloseConnections:true})
server.setSerializerCompiler(serializerCompiler)
server.setValidatorCompiler(validatorCompiler)
server.setErrorHandler(errorGlobal)
server.register(fastifyMultipart,{
  limits:{
    fieldSize:10*1024*1024
  }
})
import dotenv from 'dotenv'
import { rentalRoutes } from "../routes/rental/rental.routes.js";
dotenv.config()
server.register(fastifyJwt,{secret:process.env.SECRET_JWT as string})
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
server.register(fastifyStatic,{
    root:path.join(process.cwd(),'uploads'),
    prefix:'/uploads/'
})
server.register(fastifySwaggerUi,{routePrefix:'docs',uiConfig:{
    docExpansion:"full",
    deepLinking:true
}})
server.after(() => {
    
server.register(userRoutes,{prefix:'/user'})
server.register(propertyRoutes,{prefix:'/property'})
server.register(imgRoutes)
server.register(rentalRoutes,{prefix:'/rental'})

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