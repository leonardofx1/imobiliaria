import type { FastifyReply, FastifyRequest } from "fastify";
import type { IUpLoadImgService } from "../../services/img/IUploadService.type.js";
import { ImgErrorMediaType } from "../../error/img/imgError.js";





export class ImgController {
    constructor(private UploadImgService:IUpLoadImgService){}

    save = async (req:FastifyRequest,reply:FastifyReply)=> {
        const file = await req.file()
        try {
         
        if(file){
       const imgUrl = await this.UploadImgService.save(file)
       reply.status(201).send(imgUrl)
    }
        } catch (error) {
            console.error(error)
            if(error instanceof ImgErrorMediaType){
                reply.status(415).send('invalid image format.')
            }

            reply.status(500).send('internal server error.')
        }
    }
}