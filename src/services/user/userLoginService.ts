import { UserReturnLoginDto, type UserLoginDto } from "../../dto/userDto.js";
import { CredentialsInvalid, UserNotFound } from "../../error/user/user.error.js";
import type { IUserRepository, IUserReturnLogin } from "../../repository/user/IUserRepository.js";
import type { ICryptgraph } from "../../utils/credentials/cryptograph.js";


export class UserLoginService {
    constructor(private userDb:IUserRepository, private cryptgraph : ICryptgraph){

    }

    login =  async (user: UserLoginDto) => {
        
       const getUser = await  this.userDb.findByEmail(user.email)
       if(!getUser  || getUser.length <= 0  ) {
         throw new UserNotFound()
       }
       
       const comparePass = await  this.cryptgraph.compare(user.password,getUser[0]!.password)
        if(!comparePass){
            throw  new CredentialsInvalid()
        }
        const {email, id,age,name,role} = getUser[0] as IUserReturnLogin
        return new UserReturnLoginDto(id,name,email,age,role?? 'user')
        
     

    }
}