import type { UserLoginDto, UserReturnLoginDto } from "../../../dto/userDto.js";


export interface IUserLoginService {
    login: (user:UserLoginDto)=> Promise<UserReturnLoginDto>
}