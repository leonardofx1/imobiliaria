import type { UserRoles } from "../db/schema.js"

export class UserLoginDto {
    
    constructor( public email:string, public password:string){
        this.email = email
        this.password = password

    }

}

export class UserReturnLoginDto {
    constructor(public id:string ,public name:string, public email:string, public age:number, public role?:UserRoles) {
        this.id= id
        this.name = name
        this.age = age
        this.email = email
       
        this.role = role ?? 'user'
    }
}
export class CreateUserDto {
    constructor(public name:string, public email:string, public password:string, public age:number, public role?:UserRoles) {
        this.name = name
        this.age = age
        this.email = email
        this.password = password
        this.role = role ?? 'user'
    }
}