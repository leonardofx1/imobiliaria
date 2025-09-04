

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


export class PropertyNotFoundError extends Error {
    constructor(){
        super('Propety not found.')
        this.name = 'Property not found error.'
    }
}

export class PropertyNotUpdate extends Error {
    constructor(){
        super('Property not update')
        this.name = 'Property not update'
    }
}