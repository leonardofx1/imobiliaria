import type {  MultipartFile } from "@fastify/multipart";


export interface IUpLoadImgService {
    save: (file:MultipartFile) => Promise<string | null>
    createDirectory:(fileName:string) => string
    validateImageFormat: (fileType:string) => boolean
}