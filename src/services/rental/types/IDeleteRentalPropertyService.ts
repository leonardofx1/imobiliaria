

export interface IDeleteRentalPropertyService {
    deleteRental:(id:string)=> Promise<Boolean| null>
}