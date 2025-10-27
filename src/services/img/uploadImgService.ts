import type { MultipartFile } from "@fastify/multipart"

import path from 'path'
import fs from 'fs'

import { pipeline } from "stream"
import { promisify } from "util"
import type { IUpLoadImgService } from "./IUploadService.type.js"
import { ImgErrorMediaType } from "../../error/img/imgError.js"

export class UploadImgService implements IUpLoadImgService{
     mimetype : string[]
    constructor(){
        this.mimetype = ['image/png','image/jpeg','image/webp']
    }
    createDirectory= (fileName: string) => {
        const uploadDir = path.join(process.cwd(),'uploads')
        if(!fs.existsSync(uploadDir)){
            fs.mkdirSync(uploadDir,{recursive:true})
        }
        const uploadPath = path.join(uploadDir,fileName)
        return uploadPath
    }
    save= async (file: MultipartFile) => {
    
        const pump = promisify(pipeline)
        const type = file.mimetype
        const fileName = file.filename
        const imgFile = file.file
      
        if(!this.validateImageFormat(type)){
             throw new ImgErrorMediaType()
        }
        const filePath = this.createDirectory(file.filename)
       await pump(imgFile, fs.createWriteStream(filePath))
       return `/uploads/${fileName}`
   
    }
    validateImageFormat = (fileType: string) => {
        if(this.mimetype.includes(fileType)){
            return true
        }
        return false
    }
}