import type { CreateUserDto } from "../../../dto/userDto.js";

export interface IUserCreateService{
    save: (user:CreateUserDto) => Promise<string| undefined>
    findByUserEmail:(email:string) => void
}