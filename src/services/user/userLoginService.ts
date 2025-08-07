import { UserReturnLoginDto, type UserLoginDto } from "../../dto/userDto.js";
import { CredentialsInvalid, UserNotFound } from "../../error/user/user.error.js";
import type { IUserRepository } from "../../repository/user/IUserRepository.js";
import type { ICryptgraph } from "../../utils/credentials/cryptograph.js";


export class UserLoginService {
    constructor(private userDb:IUserRepository, private cryptgraph : ICryptgraph){

    }

    login =  async (user: UserLoginDto) => {
        
       const getUser = await  this.userDb.findByEmail(user.email)
       if(getUser) {
        const comparePass = await  this.cryptgraph.compare(user.password,getUser.password)
        if(comparePass){
            const {email, id} = getUser
            return new UserReturnLoginDto(id,email)
        }{
            throw  new CredentialsInvalid()
        }
       }else {
        throw new UserNotFound()
       }

    }
}