import fastify from "fastify";

const server = fastify()




const start =async  () => {
    try {
        await server.listen({port:3000})
        console.log('server on ')
    } catch (error) {
        console.error(`$server error : ${error}`)
    }
}
start()