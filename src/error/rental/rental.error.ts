

export class ValidateRentalError extends Error {
    constructor(){
        super('Property unavaible for rent.')
        this.message = 'property rent error.'
    }
}

export class PaymentRentalError extends Error {
    constructor(){
        super('Rental payment Error')
        this.message='Rental Payment Error'
    }
}

export class DeleteRentalError extends Error {
    constructor(){
        super('Payment deletion error.')
        this.message='Payment deletion Error'
    }
}

export class UpdateRentalError extends Error {
    constructor(){
        super('Rental update Error')
        this.message='Rental update Error'
    }
}

export class ValidateDateError extends Error {
    constructor(){
        super('Date Error')
        this.message ="start date greater than end date. "
    }
}

export class RentalNotFoundError extends Error {
    constructor(){
        super("not Found")
        this.message ="Rental Not Found."
    }
}