import type { CreateUserDto } from "../../dto/userDto.js";
import type {
  IUserRepository,
  IUserReturnLogin,
} from "../../repository/user/IUserRepository.js";
import {randomUUID} from 'node:crypto'
export class UserRepositoryMock implements IUserRepository {
  private memory: IUserReturnLogin[] = [];
  constructor() {
    this.memory = [];
  }
  findByEmail = async (email: string) => {
    const res = this.memory.filter((item) => item.email === email);
    return res;
  };
  findById = async (id: string) => {
    const res = this.memory.filter((item) => item.id === id);
    return res;
  };
  save = async (user: CreateUserDto) => {
    const userToSave = {
      ...user,
      id: randomUUID(),
    } as IUserReturnLogin;
    const create = this.memory.push(userToSave);
    return userToSave.id;
  };
}
