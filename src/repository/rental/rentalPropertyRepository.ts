import { eq } from "drizzle-orm";
import { db } from "../../db/index.js";
import { rental } from "../../db/schema.js";
import type { RentalPropertyDto, RentalPropertyReturning } from "../../dto/propertyDto.js";
import type { IRentalPropertyRepository} from "./IRentalPropertyRepository.js";



export class RentalPropertyRepository implements IRentalPropertyRepository {
    save= async (rentalProperty: RentalPropertyDto) => {
        const res=   await db.insert(rental).values(rentalProperty).returning()
        return res[0]?.id ?? ''

    }
    getRental= async ( id: String) => {
        const ResRental = await db.select().from(rental).where(eq(rental.id,id as string))
        return ResRental[0] as RentalPropertyReturning
    }
    updateRental= async (rentalDto: RentalPropertyReturning) => {
        const res = await db.update(rental).set(rentalDto).where(eq(rental.id,rentalDto.id)).returning() 

        return res[0] as RentalPropertyReturning
    }
    delete= async (id: string) => {
        const res = await db.delete(rental).where(eq(rental.id,id)).returning()

        return res[0] as RentalPropertyReturning
    }
}