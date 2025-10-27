import type { FastifyInstance } from "fastify";
import { ImgController } from "../../controllers/img/imgController.js";
import { UploadImgService } from "../../services/img/uploadImgService.js";
import z from "zod";




export const imgRoutes = (app:FastifyInstance) => {
    const uploadService = new UploadImgService()
    const imgController = new ImgController(uploadService)
    app.post('/upload',{
        schema:{
            tags:['image'],
            summary:'upload of image.',
            description:'upload an image and return its access address.',
            
        response:{
            201:z.string(),
            415:z.string(),
            500:z.string(),

        }
        }
    },imgController.save)
}