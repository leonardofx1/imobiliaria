import type { UserRoles } from "../../db/schema.js";
import type { CreateUserDto, UserLoginDto, UserReturnLoginDto } from "../../dto/userDto.js";

export interface IUserReturnLogin {
  id: string;
  email: string;
  password: string;
  name: string;
  age: number;
  role:  UserRoles | null;
}
export interface IUserRepository {
  findByEmail: (email: string) =>  Promise<IUserReturnLogin[] | null>
  save: (user: CreateUserDto) => Promise<string | undefined>;
  findById: (id: string) => Promise<IUserReturnLogin[] | null >;
}
