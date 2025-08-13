import { UserRepository } from "../../repository/user/userRepository.js"
import { UserLoginService } from "../../services/user/userLoginService.js"
import { Cryptgraph } from "../../utils/credentials/cryptograph.js"


export const  LoginUserFactory = () => {
    const db = new UserRepository()
    const bcrypt = new Cryptgraph()

    return new UserLoginService(db,bcrypt)
}