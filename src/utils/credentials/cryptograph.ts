import bcrypt from 'bcryptjs'

export interface ICryptgraph {
    compare: (password:string,passwordHash:string) => Promise<boolean>
    hash:(password:string) => Promise<string>
    salt: (num:number)=> Promise<string>
}
export class Cryptgraph implements ICryptgraph {
   
   
    compare = async(password : string,passwordHash: string) => {
        const resCompare = bcrypt.compare(password,passwordHash)
        return resCompare

    }
    hash = async (password:string,salt =6 )=>{
        const passHash = await  bcrypt.hash(password, await this.salt(salt))
        return passHash
    }
    salt = async (salt:number) => {
        const genSalt = bcrypt.genSalt(salt)
        return genSalt
    }
}