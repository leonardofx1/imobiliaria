import { UserRepository } from "../../repository/user/userRepository.js"
import { UserCreateService } from "../../services/user/userCreateService.js"
import { Cryptgraph } from "../../utils/credentials/cryptograph.js"



export const createUserFactory = () => {
    const db = new UserRepository()
    const cryptgraph = new Cryptgraph()

    return new UserCreateService(db,cryptgraph)
}