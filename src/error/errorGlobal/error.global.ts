import type { FastifyError, FastifyReply, FastifyRequest } from "fastify"


export const errorGlobal = (error: FastifyError,req:FastifyRequest,reply:FastifyReply)=> {
    if(error.validation){
        const errorFormated = error.validation?.map(err => ({
            field:err.instancePath?.replace('/','')|| 'body',
            message:err.message,
            code:err.keyword,
        }) )
      
        return reply.status(400).send({
            error:'Dados ínvalidos',
            details:errorFormated,
        })

    }
    
    reply.status(500).send({message:'Internal server error.'})
}