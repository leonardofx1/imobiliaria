import { UserRepository } from "../../repository/user/userRepository.js"
import type { IUserCreateService } from "../../services/user/types/IUserCreateService.js"
import { UserCreateService } from "../../services/user/userCreateService.js"
import { Cryptgraph } from "../../utils/credentials/cryptograph.js"


 const CreateUserFactory = () => {
    const db = new UserRepository()
    const cryptgraph = new Cryptgraph()

    return new UserCreateService(db,cryptgraph) 
}
const createUserFactory = CreateUserFactory()
export {createUserFactory}