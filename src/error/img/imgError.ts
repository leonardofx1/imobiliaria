

export class ImgErrorMediaType extends Error {
    constructor(){
        super('unsupported media type')
        this.message = 'invalid image format.'
    }
}