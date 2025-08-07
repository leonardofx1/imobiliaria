import type { UserLoginDto, UserReturnLoginDto } from "../../dto/userDto.js";

export interface IUserReturnLogin {
    id:string
    email:string
    password:string
}
export interface IUserRepository {
    findByEmail :(email:string) => Promise<IUserReturnLogin>
    save: (user: UserLoginDto) => Promise<{id:string}>
    findById:(id:number) => Promise<UserReturnLoginDto>
}