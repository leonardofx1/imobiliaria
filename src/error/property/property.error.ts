

export class PropertyCreateError extends Error {
    constructor(){
        super('Property create error.')
        this.name = 'Property create error..'
    }
}

export class PorpertyDeleteError extends Error {
    constructor(){
        super('The property could not be deleted.')
        this.name ='Property delete error.'
    }
}