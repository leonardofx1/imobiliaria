import { eq } from "drizzle-orm";
import { db } from "../../db/index.js";
import type { CreateUserDto, UserLoginDto, UserReturnLoginDto } from "../../dto/userDto.js";
import type { IUserRepository, IUserReturnLogin } from "./IUserRepository.js";
import { users } from "../../db/schema.js";

export class UserRepository implements IUserRepository {
  constructor() {}
  findByEmail = async (email: string) => {
    const findUser = await db.select().from(users).where(eq(users.email,email))
    return findUser ?? null
  };

  findById = async (id: string) => {
    const findUser = await db.select().from(users).where(eq(users.id, id))
    return findUser
  };

  save = async (user: CreateUserDto) =>{
    const saveUser = await db.insert(users).values(user).returning()
    return saveUser[0]?.id
  }
}
