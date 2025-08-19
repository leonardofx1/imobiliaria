import { CreateUserDto } from "../../dto/userDto.js";
import { UserAlreadyExists } from "../../error/user/user.error.js";
import type { IUserRepository } from "../../repository/user/IUserRepository.js";
import type { ICryptgraph } from "../../utils/credentials/cryptograph.js";
import type { IUserCreateService } from "./types/IUserCreateService.js";

export class UserCreateService implements IUserCreateService{
  constructor(
    private memoryDb: IUserRepository,
    private cryptgraph: ICryptgraph
  ) {}

  save = async (user: CreateUserDto) => {
    await  this.findByUserEmail(user.email);

    const passwordHash = await this.cryptgraph.hash(user.password);
    user.password = passwordHash;
   
    const id = await this.memoryDb.save(user  );
    return id;
  };
  findByUserEmail = async (email: string) => {
    const getUser = await this.memoryDb.findByEmail(email);     
    if ((getUser ?? []).length>0 ) {
      throw new UserAlreadyExists();
    }
  };
}
